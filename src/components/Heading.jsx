import React from 'react';

import '../css/Heading.css';

function Heading({ billNum, tag }) {
    return (
        <React.Fragment>
            <div className="title">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {tag ? <span className="label label-primary label-as-badge">New</span>
                        : <p className="glyphicon glyphicon-saved" />}
                    <span>Bill Generator No:{billNum} </span>
                </div>
            </div>

            <div className="row heading">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 cell">
                    <span>Item</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                    <span>Rate</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                    <span>Quantity</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                    <span>GST</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                    <span>Amount</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Heading;
