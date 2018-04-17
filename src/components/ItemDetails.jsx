import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../css/ItemDetails.css';

import jsonData from './data.json';

function ItemDetails({
    data: {
        item, rate, gst, qty,
    }
    , id, updateItem, readOnly,
}) {
    const amount = (rate + (rate * (gst / 100))) * qty;

    function onChangeInput({
        target: {
            name, value,
        },
    }) {
        const newItem = {
            item, rate, gst, qty,
        };
        if (name === 'qty') {
            newItem.qty = value;
        }
        updateItem(id, newItem);
    }

    function changeItem(itemName) {
        const newItem = {
            item, rate, gst, qty,
        };
        newItem.item = itemName;
        newItem.rate = 0.0;
        newItem.gst = 0;
        newItem.qty = 0;
        updateItem(id, newItem);
    }

    function itemChange(selections) {
        const newItem = selections[0];
        updateItem(id, newItem);
    }

    return (
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 cell">
                {!readOnly ? <Typeahead
                    labelKey="item"
                    value={item}
                    onChange={itemChange}
                    onInputChange={changeItem}
                    options={jsonData}
                    ref={typeahead => item === ' ' && typeahead && typeahead.getInstance().clear()}
                    placeholder="items"
                /> : item}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                <span>{rate > 0 || item !== '' ? rate : ''}</span>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                {!readOnly ? <input
                    name="qty"
                    type="number"
                    value={qty > 0 || item !== '' ? qty : ''}
                    onChange={onChangeInput}
                /> : qty}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2 cell">
                <span>{gst > 0 || item !== '' ? `${gst}%` : ''}</span>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 cell">
                <span className="bold-cell">{amount > 0 || item !== '' ? amount : ''}</span>
            </div>
        </div>
    );
}

export default ItemDetails;
