import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../css/BillApplication.css';

import Heading from './Heading';
import Modal from './Modal';
import SaveWarning from './SaveWarning';
import ViewData from './ViewData';
import ItemDetails from './ItemDetails';
import TotalTable from './TotalTable';

import { generateBillnumber } from '../helper-functions/generateBillnumber';

class BillApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                item: '',
                rate: 0.0,
                gst: 0.0,
                qty: 0,
            }],
        };

        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.saveData = this.saveData.bind(this);
        this.resetData = this.resetData.bind(this);
        this.getFooter = this.getFooter.bind(this);

        this.billNum = generateBillnumber();

        this.id = this.props.match.params.id;
        this.url = this.props.match.url;
        this.history = this.props.history;
    }

    getItems() {
        const readOnly = this.id && true;
        const retrievedData = localStorage.getItem(this.id);
        const data = readOnly ? JSON.parse(retrievedData) : this.state.data;

        return data.map((product, index) =>
            (<ItemDetails
                key={index}
                id={index}
                data={product}
                updateItem={this.updateItem}
                readOnly={readOnly}
            />));
    }

    getFooter() {
        if (this.id) {
            return (
                <div>
                    <TotalTable billNum={this.id} />
                    <Link to="/" replace>
                        <button className="glyphicon glyphicon-chevron-left btn btn-primary">
                            back
                        </button>
                    </Link>
                </div>);
        }
        return (
            <div>
                <TotalTable data={this.state.data} />
                <Link to={{ pathname: '/save' }}>
                    <button className="glyphicon glyphicon-save btn btn-primary">Save</button>
                </Link>
                &nbsp;

                <button
                    className="glyphicon glyphicon-refresh btn btn-primary"
                    onClick={this.resetData}
                >
                    Reset
                </button>
                &nbsp;

                <Link to={{ pathname: '/view' }}>
                    <button className="glyphicon glyphicon-open btn btn-primary">View</button>
                </Link>

                <Route
                    path="/save"
                    render={() => (<Modal
                        {...<SaveWarning
                            saveData={this.saveData}
                            billNum={this.billNum}
                            history={this.history}
                        />
                        }
                        close={() => { this.history.push('/'); }}
                    />)}
                />

                <Route
                    strict
                    exact
                    path="/view"
                    render={() => (<Modal
                        {...<ViewData
                            history={this.history}
                        />}
                        close={() => { this.history.push('/'); }}
                    />)}
                />
            </div>);
    }

    addItem() {
        const newItem = [{
            item: '',
            rate: 0.0,
            gst: 0.0,
            qty: 0,
        }];
        this.setState({
            data: (this.state.data).concat(newItem),
        });
    }

    updateItem(index, newValue) {
        const newData = this.state.data;
        newData[index] = newValue;
        const newState = {
            data: newData,
        };
        this.setState(newState);
        if (index === this.state.data.length - 1) {
            this.addItem();
        }
    }

    saveData() {
        let store = this.state.data;
        store = store.filter(obj => obj.item !== '');
        this.setState({
            data: store,
        });
        localStorage.setItem(this.billNum, JSON.stringify(store));
        this.history.push(`/view/${this.billNum}`);
    }

    resetData() {
        let newItem = this.state.data;
        newItem = [{
            item: ' ',
            rate: 0.0,
            gst: 0.0,
            qty: 0,
        }];
        this.setState({
            data: newItem,
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="table">
                    {!this.id ?
                        <Heading billNum={this.billNum} tag="new" /> :
                        <Heading billNum={this.id} />}
                    {this.getItems()}
                    {this.getFooter()}
                </div>
            </React.Fragment>
        );
    }
}

export default BillApplication;
