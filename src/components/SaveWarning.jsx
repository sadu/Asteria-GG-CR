import React, { Component } from 'react';

import '../css/Modal.css';

class SaveWarning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billSaved: false,
        };
        this.showBillnum = this.showBillnum.bind(this);
        this.home = this.home.bind(this);

        this.saveData = this.props.saveData;
        this.billNum = this.props.billNum;
        this.history = this.props.history;
    }

    showBillnum(event) {
        this.setState({
            billSaved: true,
        });
        event.target.className = 'btn btn-success';
    }

    home() {
        this.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <div className="modal-body">
                    {this.state.billSaved ?
                        <div className="alert alert-success" role="alert">
                                Bill Number {this.billNum} saved
                        </div>
                        :
                        'Do you want to save?'}
                </div>

                <div className="modal-footer">
                    {!this.state.billSaved ?
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.home}
                        >
                                Cancel
                        </button>
                        : ''}
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.state.billSaved ?
                            this.saveData :
                            this.showBillnum}
                    >
                        Ok
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default SaveWarning;
