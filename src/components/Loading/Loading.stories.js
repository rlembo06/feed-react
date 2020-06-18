import React from 'react';
import { Loading } from './';

export default {
    component: Loading,
    title: 'Loading',
};

export const Default = () => <Loading />;

export const AtBottom = () => <Loading atBottom />;
