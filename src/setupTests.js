import 'jest-enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    getItem(key) {
        key ? this.store[key] = '[{ "item": "book", "rate": 100, "qty": 1, "gst": 4.5 }]' : null;
        return this.store[key];
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }
}

global.localStorage = new LocalStorageMock();
