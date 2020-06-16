import { expect } from 'chai'
import React from 'react'
import {configure, shallow} from 'enzyme'
import { mockResponse } from 'api/modules/mocks.module.api'
import Feed from './Feed'
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe('<Feed />', () => {
    it('renders without crashing', () => {
        const feed = mockResponse.results[0];
        const wrapper = shallow(<Feed feed={feed} />);
        expect(wrapper.find('FeedImage')).to.have.length(1);
        expect(wrapper.find('FeedScores')).to.have.length(1);
    });
});
