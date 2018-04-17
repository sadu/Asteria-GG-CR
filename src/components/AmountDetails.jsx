import React from 'react';

import '../css/AmountDetails.css';

function AmountDetails({
    bill: {
        gross, total, serviceCharge, gst,
    },
}) {
    return (
        <React.Fragment>
            <div className="row1">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 cell1">
                    <p>Gross :</p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell1">
                    <p>&#x20b9;{gross} /-</p>
                </div>
            </div>

            <div className="row1">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 cell1">
                    <p>GST :</p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell1">
                    <p>&#x20b9;{gst} /-</p>
                </div>
            </div>

            <div className="row1">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 cell1">
                    <p>Service Charges(10%) :</p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell1">
                    <p>&#x20b9;{serviceCharge} /-</p>
                </div>
            </div>

            <div className="row1">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 cell1">
                    <p className="total">Grand Total :</p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell1">
                    <p className="total">&#x20b9;{total} /-</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AmountDetails;
