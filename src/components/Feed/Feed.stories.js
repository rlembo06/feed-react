import React from 'react';
import { Feed } from './';
import {mockResponse} from "api/modules/mocks.module.api";

export default {
    component: Feed,
    title: 'Feed',
};

const feedData = mockResponse.results[0];

export const Default = () => <Feed feed={feedData}/>;
