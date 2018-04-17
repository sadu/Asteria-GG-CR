import React from 'react';
import { shallow, mount } from 'enzyme';
import { HashRouter as Router, Switch } from 'react-router-dom';

import BillApplication from '../components/BillApplication';

describe('BillApplication Component edit mode', () => {
    const match = { params: {} };

    const component = shallow(<BillApplication match={match} />);

    it('should be defined', () => {
        expect(BillApplication).toBeDefined();
    });


    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should respond to state change', () => {
        const data = {
            item: 'pen',
            rate: 10,
            gst: 5,
            qty: 1,
        };
        const oldData = [{
            item: '',
            rate: 0.0,
            gst: 0.0,
            qty: 0,
        }];

        const instance = component.instance();
        expect(component.state('data')).toEqual(oldData);
        instance.updateItem(0, data);
        const stateData = component.state('data');
        stateData[1] = {
            item: '',
            rate: 0.0,
            gst: 0.0,
            qty: 0,
        };
        expect(component.state('data')).toEqual(stateData);
        expect(component.state('data').length).toEqual(2);
    });

    it('resetData works', () => {
        const stateData = [{
            item: ' ',
            rate: 0.0,
            gst: 0.0,
            qty: 0,
        }];

        const instance = component.instance();
        instance.addItem();
        expect(component.state('data').length).toEqual(3);
        instance.resetData();
        expect(component.state('data')).toEqual(stateData);
        expect(component.state('data').length).toEqual(1);
    });

    it('buttons rendered', () => {
        expect(component.find('button').length).toEqual(3);
    });

});

describe('BillApplication Component view mode', () => {
    const match = { params: { id: 1 } };

    const component = shallow(<BillApplication match={match} />);

    it('should be defined', () => {
        expect(BillApplication).toBeDefined();
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('buttons rendered', () => {
        expect(component.find('button').length).toEqual(1);
    });
});
