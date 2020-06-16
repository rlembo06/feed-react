export const mockResponse = {
    metaData: {
        skip: 0,
        limit: 30,
        total: 2442
    },
    results: [
        {
            _id: '5ee810463fbb1a0006c1f4f0',
            score: {
                base: 0
            },
            polygon: {
                coordinates: []
            },
            distance: 3118,
            duration: 2244,
            climb: 0,
            descent: 0,
            origin: '@sportheroes/bk-ms-apps v1.198.0',
            deleted: false,
            points: 22,
            issues: [],
            timezone: 2,
            isValid: true,
            isDaily: true,
            isUserCreated: false,
            calories: 0,
            steps: 4213,
            activeTime: 0,
            source: 'push',
            waypoints: [],
            date: '2020-06-16T00:00:00.000Z',
            id: 'sportheroes_5411bab0c8e1e7656f4ff291_16-06-2020',
            rawType: 'Walking',
            type: 'Walking',
            uid: '5411bab0c8e1e7656f4ff291',
            provider: 'sportheroes',
            createdAt: '2020-06-16T00:20:24.020Z',
            transactionsLock: [],
            __v: 0,
            updatedAt: '2020-06-16T19:34:39.162Z',
            claps: {
                total: 0,
                currentUser: 0
            }
        },
        {
            _id: '5ee74e3e6bfc6b00060542cd',
            score: {
                base: 0
            },
            polygon: {
                coordinates: []
            },
            distance: 10006,
            duration: 2350,
            climb: 75,
            descent: 76,
            origin: '@sportheroes/bk-ms-apps v1.197.0',
            deleted: false,
            points: 101,
            issues: [],
            timezone: 2,
            isValid: true,
            isDaily: false,
            isUserCreated: false,
            calories: 703,
            steps: 6826,
            activeTime: 0,
            source: 'push',
            waypoints: [],
            date: '2020-06-15T09:48:25.000Z',
            id: '5092446398',
            rawType: 'RUNNING',
            type: 'Running',
            uid: '5411bab0c8e1e7656f4ff291',
            provider: 'garmin',
            url: 'https://connect.garmin.com/modern/activity/5092446398',
            createdAt: '2020-06-15T10:32:30.554Z',
            transactionsLock: [],
            __v: 0,
            claps: {
                total: 0,
                currentUser: 0
            }
        }
    ]
};

export default {
    getAll: () => new Promise((resolve, reject) => {
        resolve(mockData)
    })
}
