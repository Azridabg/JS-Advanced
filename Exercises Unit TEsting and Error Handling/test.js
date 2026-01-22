import { expect } from 'chai';

import { isOddOrEven } from './evenOrOdd.js';


describe('Even or odd str length', () => {
    it('other than str', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it('other than str', () => {
        expect(isOddOrEven([1, 2, 3])).to.equal(undefined);
    });

    it('other than str', () => {
        expect(isOddOrEven(true)).to.equal(undefined);
    });

    it('str even', () => {
        expect(isOddOrEven('true')).to.equal('even');
    });

    it('str even', () => {
        expect(isOddOrEven('true33')).to.equal('even');
    });

    it('str odd', () => {
        expect(isOddOrEven('true333')).to.equal('odd');
    });

    it('str odd', () => {
        expect(isOddOrEven('tru')).to.equal('odd');
    });
});