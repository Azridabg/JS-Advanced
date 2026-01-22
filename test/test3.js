import { expect } from 'chai';

import { rgbToHexColor } from '../demo3.js';

describe('rgb colors to hex', () => {
    it('rgb to hex', () => {
        expect(rgbToHexColor(12, 12, 12)).to.equal('#0C0C0C');
    });

    it('red outOfRange', () => {
        expect(rgbToHexColor(-16, 15, 15)).to.equal(undefined);
    });

    it('green outOfRange', () => {
        expect(rgbToHexColor(1, 999, 2)).to.equal(undefined);
    });

    it('blue outOfRange', () => {
        expect(rgbToHexColor(1, 9, 2000)).to.equal(undefined);
    });

    it('blue not Integer', () => {
        expect(rgbToHexColor(1, 9, 's')).to.equal(undefined);
    });

    it('green not Integer', () => {
        expect(rgbToHexColor(1, 's', 2)).to.equal(undefined);
    });

    it('red not Integer', () => {
        expect(rgbToHexColor('s', 9, 6)).to.equal(undefined);
    });

    
});