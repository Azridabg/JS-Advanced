import { expect } from 'chai';

import { createCalculator } from '../demo4.js';


describe('Obj creation', () => {
    it('is the result an obj', () => {
        let obj = createCalculator();
        expect(obj.hasOwnProperty('add')).to.equal(true);
    });

    it('is the result an obj', () => {
        let obj = createCalculator();
        expect(obj.hasOwnProperty('subtract')).to.equal(true);
    });

    it('is the result an obj', () => {
        let obj = createCalculator();
        expect(obj.hasOwnProperty('get')).to.equal(true);
    });
    
    it('is the result an obj', () => {
        let obj = createCalculator();
        expect(typeof obj).to.equal('object');
    });

    it('add check', () => {
        let obj = createCalculator();
        obj.add(5);
        expect(obj.get()).to.equal(5);
    });

    it('subtract check', () => {
        let obj = createCalculator();
        obj.add(11);
        obj.subtract(6)
        expect(obj.get()).to.equal(5);
    });
});