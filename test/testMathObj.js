import { expect } from 'chai';

import { mathEnforcer } from '../demoMathObj.js';


describe('Test Math Obj', () => {
    it('test addFive func', () => {
        let add5 = mathEnforcer.addFive('5');
        expect(add5).to.equal(undefined);
    });

    it('test addFive func', () => {
        let add5 = mathEnforcer.addFive(5);
        expect(add5).to.equal(10);
    });

    it('test addFive func', () => {
        let add5 = mathEnforcer.addFive(0);
        expect(add5).to.equal(5);
    });

    it('test addFive func', () => {
        let add5 = mathEnforcer.addFive(-1);
        expect(add5).to.equal(4);
    });

    it('test addFive func', () => {
        let add5 = mathEnforcer.addFive(3.1);
        expect(add5).to.equal(8.1);
    });

    it('test subtractTen func', () => {
        let subtract10 = mathEnforcer.subtractTen('10');
        expect(subtract10).to.equal(undefined);
    });

    it('test subtractTen func', () => {
        let subtract10 = mathEnforcer.subtractTen(20);
        expect(subtract10).to.equal(10);
    });

    it('test subtractTen func', () => {
        let subtract10 = mathEnforcer.subtractTen(20.1);
        expect(subtract10).to.equal(10.1);
    });

    it('test subtractTen func', () => {
        let subtract10 = mathEnforcer.subtractTen(10);
        expect(subtract10).to.equal(0);
    });

    it('test subtractTen func', () => {
        let subtract10 = mathEnforcer.subtractTen(9);
        expect(subtract10).to.equal(-1);
    });

    it('test sum func', () => {
        let sum = mathEnforcer.sum('5', 6);
        expect(sum).to.equal(undefined);
    });

    it('test sum func', () => {
        let sum = mathEnforcer.sum(5, '6');
        expect(sum).to.equal(undefined);
    });

    it('test sum func', () => {
        let sum = mathEnforcer.sum(5, 6);
        expect(sum).to.equal(11);
    });

    it('test sum func', () => {
        let sum = mathEnforcer.sum(2, -2);
        expect(sum).to.equal(0);
    });

    it('test sum func', () => {
        let sum = mathEnforcer.sum(2, -4);
        expect(sum).to.equal(-2);
    });

    it('test sum func', () => {
        let sum = mathEnforcer.sum(2, 4.1);
        expect(sum).to.equal(6.1);
    });
});