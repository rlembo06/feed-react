import { expect } from 'chai';
import { convertSeconds, getFeedValueByType } from './feedValueConverters.helper';

import { mockResponse } from 'api/modules/mocks.module.api'

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
