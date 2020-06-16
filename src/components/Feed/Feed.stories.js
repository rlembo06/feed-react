import React from 'react';
import { Feed } from './';

export default {
    component: Feed,
    title: 'Feed',
};

const feedData = {
    "_id": "5ee810463fbb1a0006c1f4f0",
    "score": {
        "base": 0
    },
    "polygon": {
        "coordinates": []
    },
    "distance": 2233,
    "duration": 1607,
    "climb": 0,
    "descent": 0,
    "origin": "@sportheroes/bk-ms-apps v1.198.0",
    "deleted": false,
    "points": 16,
    "issues": [],
    "timezone": 2,
    "isValid": true,
    "isDaily": true,
    "isUserCreated": false,
    "calories": 0,
    "steps": 3017,
    "activeTime": 0,
    "source": "push",
    "waypoints": [],
    "date": "2020-06-16T00:00:00.000Z",
    "id": "sportheroes_5411bab0c8e1e7656f4ff291_16-06-2020",
    "rawType": "Walking",
    "type": "Walking",
    "uid": "5411bab0c8e1e7656f4ff291",
    "provider": "sportheroes",
    "createdAt": "2020-06-16T00:20:24.020Z",
    "transactionsLock": [],
    "__v": 0,
    "updatedAt": "2020-06-16T18:09:34.711Z",
    "claps": {
        "total": 0,
        "currentUser": 0
    }
}

export const Default = () => <Feed feed={feedData}/>;
