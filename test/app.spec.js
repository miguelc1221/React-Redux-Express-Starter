import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/component/app';

describe('App', () => {
    const wrapper = shallow(<App />)

    it('renders app', () => {
        expect(wrapper.type()).to.eql('div')
    });

})
