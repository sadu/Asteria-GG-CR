import React from 'react';
import { mount } from 'enzyme';

import TotalTable from '../components/TotalTable';
import { biller } from '../helper-functions/Challenge1';

describe('When bill is not empty', () => {
    const component = mount(<TotalTable data={
        [{
            item: 'pen',
            rate: 10,
            qty: 1,
            gst: 5,
        }]
    }
    />);

    it('should be defined', () => {
        expect(TotalTable).toBeDefined();
    });

    it('should render correctly', () => {
        expect(component.find('AmountDetails').length).toBeTruthy();
        expect(component).toMatchSnapshot();
    });

    it('simulates biller function', () => {
        const finalBill = {
            gross: 0,
            total: 0,
            serviceCharge: 0,
            gst: 0,
        };
        const bill = biller(finalBill, 10, 1, 5);
        expect(bill).toEqual({
            gross: 10,
            total: 11.5,
            serviceCharge: 1,
            gst: 0.5,
        });
    });

    it('print button', () => {
        expect(component.find('button').length).toEqual(1);
    });
});

describe('When bill is empty', () => {
    const component = mount(<TotalTable data={
        [{
            item: '',
            rate: 0.0,
            gst: 0.0,
            qty: 0,
        }]
    }
    />);

    it('should be defined', () => {
        expect(TotalTable).toBeDefined();
    });

    it('values rendered correctly', () => {
        const pTags = component.find('p');
        expect(pTags.at(1).text()).toEqual('₹0 /-');
        expect(pTags.at(3).text()).toEqual('₹0 /-');
        expect(pTags.at(5).text()).toEqual('₹0 /-');
        expect(pTags.at(7).text()).toEqual('₹0 /-');
    });
});
