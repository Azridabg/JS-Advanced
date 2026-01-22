import { expect } from 'chai';

import { isSymmetric } from '../demo2.js';


describe('Chech arr equality', () => {
    it('is arr', () => {
        expect(isSymmetric([])).to.equal(true);
    });

    // Test overloading
    it('is not arr', () => {
        expect(isSymmetric(2)).to.equal(false);
    });

    it('arr not equal', () => {
        expect(isSymmetric([2, 6, 3, 4])).to.equal(false);
    });

    it('arr equal', () => {
        expect(isSymmetric([2, 3, 3, 2])).to.equal(true);
    });

    it('arr equal', () => {
        expect(isSymmetric([1])).to.equal(true);
    });

    it('is arr', () => {
        expect(isSymmetric()).to.equal(false);
    });

    it('is arr', () => {
        expect(isSymmetric('')).to.equal(false);
    });

    it('is arr', () => {
        expect(isSymmetric(true)).to.equal(false);
    });

});