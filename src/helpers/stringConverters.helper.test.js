import { expect } from 'chai';
import { camelToSnake, snakeToCamel } from './stringConverters.helper';

describe('camelToSnake()', () => {
    it('return from camel case to snake case', () => {
        expect(camelToSnake('mamaMia')).to.equal('mama_mia');
    });
});

describe('snakeToCamel()', () => {
    it('return from snake case to camel case', () => {
        expect(snakeToCamel('mama_mia')).to.equal('mamaMia');
    });
});
