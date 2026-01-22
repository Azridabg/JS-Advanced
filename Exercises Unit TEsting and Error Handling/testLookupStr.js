import { expect } from 'chai';

import { lookupChar } from './lookupStr.js';


describe('Char lookup', () => {
    it('check if index is not valid', () => {
        expect(lookupChar('tree', [])).to.equal(undefined);
    });

    it('check if index is floating num', () => {
        expect(lookupChar('tree', 3.11)).to.equal(undefined);
    });

    it('check if str is not valid', () => {
        expect(lookupChar(65, 3)).to.equal(undefined);
    });

    it('check if index and str are not valid', () => {
        expect(lookupChar(12, [])).to.equal(undefined);
    });

    it('incorrect index', () => {
        expect(lookupChar('true', 6)).to.equal("Incorrect index");
    });

    it('incorrect index', () => {
        expect(lookupChar('true', -11)).to.equal("Incorrect index");
    });

    it('incorrect index', () => {
        expect(lookupChar('true', 4)).to.equal("Incorrect index");
    });

    it('correct index', () => {
        expect(lookupChar('true', 3)).to.equal("e");
    });

});