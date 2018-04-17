import React from 'react';

import '../css/TotalTable.css';

import AmountDetails from './AmountDetails';

import { biller } from '../helper-functions/Challenge1';

function TotalTable({ data, billNum }) {
    let finalBill = {
        gross: 0,
        total: 0,
        serviceCharge: 0,
        gst: 0,
    };

    const billDetails = billNum ? JSON.parse(localStorage.getItem(billNum)) : data;
    billDetails.forEach((product) => {
        finalBill = biller(finalBill, product.rate, product.qty, product.gst);
        return finalBill;
    });

    function print() {
        window.print();
    }

    return (
        <React.Fragment>
            <div className="table">
                <AmountDetails bill={finalBill} />
            </div>
            <button className="glyphicon glyphicon-print btn btn-primary" onClick={print}>
                Print
            </button>
            &nbsp;
        </React.Fragment>
    );
}

export default TotalTable;
