import React from 'react';
import { Card, CardImage, CardContent } from './';
import { feedIcons } from 'constants/feed.constant';

export default {
    component: Card,
    title: 'Card',
};

export const Default = () => <Card>Card</Card>;

export const WithImage = () =>
    <Card>
        <CardContent>
            <CardImage />
        </CardContent>
    </Card>;

export const WithImageNotRound = () =>
    <Card>
        <CardContent>
            <CardImage rounded="0px"
                       border="inherit"/>
        </CardContent>
    </Card>;
