import React from 'react';
import { FeedsList } from './';
import {mockResponse} from "api/modules/mocks.module.api";

export default {
    component: FeedsList,
    title: 'FeedsList',
};

const feedsData = mockResponse.results;

export const Default = () => <FeedsList data={feedsData}/>;
