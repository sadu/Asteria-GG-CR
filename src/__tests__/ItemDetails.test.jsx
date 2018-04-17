import React from 'react';
import { mount } from 'enzyme';

import ItemDetails from '../components/ItemDetails';

describe('Edit mode', () => {
    const updateItem = jest.fn();
    const component = mount(<ItemDetails
        data={
            {
                item: '',
                rate: 0.0,
                gst: 0.0,
                qty: 0,
            }
        }
        updateItem={updateItem}
    />);

    it('should be defined', () => {
        expect(ItemDetails).toBeDefined();
    });

    it('should render correctly', () => {
        expect(component.find('input').length).toBeTruthy();
        expect(component.find('Typeahead').length).toBeTruthy();
    });

    it('values rendered correctly in edit mode', () => {
        const spanTags = component.find('span');
        expect(spanTags.at(0).text()).toEqual('');
        expect(spanTags.at(1).text()).toEqual('');
        expect(spanTags.at(2).text()).toEqual('');
    });

    it('function called on the qty input', () => {
        const event = { target: { name: 'qty', value: 5 } };
        component.find('[name="qty"]').simulate('change', event);
        expect(updateItem).toHaveBeenCalledTimes(1);
    });
});

describe('view mode', () => {
    const updateItem = jest.fn();
    const read = true;
    const component = mount(<ItemDetails
        data={
            {
                item: 'pen',
                rate: 10,
                gst: 5,
                qty: 1,
            }
        }
        updateItem={updateItem}
        readOnly={read}
    />);

    it('should be defined', () => {
        expect(ItemDetails).toBeDefined();
    });

    it('should render correctly', () => {
        expect(component.find('input').length).toBeFalsy();
        expect(component.find('Typeahead').length).toBeFalsy();
        expect(component).toMatchSnapshot();
    });

    it('values rendered in readOnly mode', () => {
        const spanTags = component.find('span');
        const divTags = component.find('div');
        expect(divTags.at(1).text()).toEqual('pen');
        expect(spanTags.at(0).text()).toEqual('10');
        expect(spanTags.at(1).text()).toEqual('5%');
        expect(spanTags.at(2).text()).toEqual('10.5');
    });
});
