import React from 'react';
import { mount } from 'enzyme';

import AmountDetails from '../components/AmountDetails';

describe('AmountDetails', () => {
    const component = mount(<AmountDetails bill={
        {
            gross: 120,
            total: 200,
            serviceCharge: 10,
            gst: 5,
        }
    }
    />);

    it('should be defined', () => {
        expect(AmountDetails).toBeDefined();
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Bill structure rendered', () => {
        expect(component.find('.row1').length).toEqual(4);
        const rows = component.find('.row1');
        rows.map((child, index) => (expect(rows.at(index).children().length).toEqual(2)));
        expect(component.find('.row1').children().length).toEqual(8);
    });

    it('values rendered correctly', () => {
        const pTags = component.find('p');
        expect(pTags.at(1).text()).toEqual('₹120 /-');
        expect(pTags.at(3).text()).toEqual('₹5 /-');
        expect(pTags.at(5).text()).toEqual('₹10 /-');
        expect(pTags.at(7).text()).toEqual('₹200 /-');
    });
});
