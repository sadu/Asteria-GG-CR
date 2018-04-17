import React, { Component } from 'react';

import '../css/Modal.css';

class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: false,
        };
        this.inputNumber = this.inputNumber.bind(this);
        this.callView = this.callView.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.home = this.home.bind(this);

        this.history = this.props.history;

        this.num = 0;
    }

    inputNumber(event) {
        this.num = event.target.value;
    }

    home() {
        this.history.push('/');
    }

    callView() {
        if (localStorage.getItem(this.num) === null) {
            this.setState({
                showError: true,
            });
        } else {
            this.history.push(`/view/${this.num}`);
        }
    }

    keyPress(e) {
        if (e.keyCode === 13) {
            this.callView();
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showError ?
                    <div className="modal-body">
                        <div className="alert alert-danger" role="alert">
                            Bill is not available
                        </div>
                    </div> :
                    <div className="modal-body">
                        <p>Enter the bill number</p>
                        <br />
                        <input onChange={this.inputNumber} onKeyDown={this.keyPress} />
                    </div>}


                {!this.state.showError ?
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.home}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.callView}
                        >
                            OK
                        </button>
                    </div> :
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.home}
                        >
                            OK
                        </button>
                    </div>}
            </React.Fragment>
        );
    }
}

export default ViewData;
