import { expect } from 'chai';
import { convertSeconds, getFeedValueByType, groupFeedByDay, convertDate } from './feedValueConverters.helper';

import { mockResponse } from 'api/modules/mocks.module.api'
import {feedUnits} from "constants/feed.constant";

describe('convertSeconds()', () => {
    it('return correct format hrs / min / sec', () => {
       expect(convertSeconds(6006)).to.equal('1 h 40 min 6 sec ')
    });
    it('return correct format min / sec', () => {
        expect(convertSeconds(2350)).to.equal('39 min 10 sec ')
    });
    it('return correct format sec', () => {
        expect(convertSeconds(30)).to.equal('30 sec ')
    })
});

describe('getFeedValueByType()', () => {
    it('return correct format with steps', () => {
        expect(getFeedValueByType(mockResponse.results[0])).to.equal('4213 pas')
    });
    it('return correct format with km and duration', () => {
        expect(getFeedValueByType(mockResponse.results[1])).to.equal('10.01 km - 39 min 10 sec ')
    });
});

describe('groupFeedByDay()', () => {
    const feedGroups = {
        '2020-06-15T00:00:00+02:00': [
            {
                __v: 0,
                _id: '5ee74e3e6bfc6b00060542cd',
                activeTime: 0,
                calories: 703,
                claps: {
                    currentUser: 0,
                    total: 0
                },
                climb: 75,
                createdAt: '2020-06-15T10:32:30.554Z',
                date: '2020-06-15T09:48:25.000Z',
                deleted: false,
                descent: 76,
                distance: 10006,
                duration: 2350,
                id: '5092446398',
                isDaily: false,
                isUserCreated: false,
                isValid: true,
                issues: [],
                origin: '@sportheroes/bk-ms-apps v1.197.0',
                points: 101,
                polygon: {
                    coordinates: []
                },
                provider: 'garmin',
                rawType: 'RUNNING',
                score: {
                    base: 0
                },
                source: 'push',
                steps: 6826,
                timezone: 2,
                transactionsLock: [],
                type: 'Running',
                uid: '5411bab0c8e1e7656f4ff291',
                url: 'https://connect.garmin.com/modern/activity/5092446398',
                waypoints: []
            }
        ],
        '2020-06-16T00:00:00+02:00': [
            {
                __v: 0,
                _id: '5ee810463fbb1a0006c1f4f0',
                activeTime: 0,
                calories: 0,
                claps: {
                    currentUser: 0,
                    total: 0
                },
                climb: 0,
                createdAt: '2020-06-16T00:20:24.020Z',
                date: '2020-06-16T00:00:00.000Z',
                deleted: false,
                descent: 0,
                distance: 3118,
                duration: 2244,
                id: 'sportheroes_5411bab0c8e1e7656f4ff291_16-06-2020',
                isDaily: true,
                isUserCreated: false,
                isValid: true,
                issues: [],
                origin: '@sportheroes/bk-ms-apps v1.198.0',
                points: 22,
                polygon: {
                    coordinates: []
                },
                provider: 'sportheroes',
                rawType: 'Walking',
                score: {
                    base: 0
                },
                source: 'push',
                steps: 4213,
                timezone: 2,
                transactionsLock: [],
                type: 'Walking',
                uid: '5411bab0c8e1e7656f4ff291',
                updatedAt: '2020-06-16T19:34:39.162Z',
                waypoints: []
            }
        ]
    };

    it('return correct feed groups from feeds list', () => {
        expect(groupFeedByDay(mockResponse.results)).to.eql(feedGroups)
    });
});

describe('convertDate()', () => {
    it('return correct date format like DD / MM / YYYY', () => {
        expect(convertDate('2020-06-15T00:00:00+02:00')).to.equal('15 / 6 / 2020')
    });
    it('return today', () => {
        expect(convertDate(new Date())).to.equal(feedUnits.TODAY)
    });
});
