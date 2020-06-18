import { expect } from 'chai'
import React from 'react'
import {configure, shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Adapter from "enzyme-adapter-react-16";

import FeedsList, { FeedsListGroup } from './FeedsList'

import { mockResponse } from 'api/modules/mocks.module.api'

chai.use(chaiEnzyme())

const feedsData = mockResponse.results;

configure({ adapter: new Adapter() });
describe('<FeedsList />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<FeedsList data={feedsData} />);
        expect(wrapper).to.containMatchingElement(<FeedsListGroup data={feedsData} />);
    });
});
