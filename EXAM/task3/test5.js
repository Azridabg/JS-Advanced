let { expect } = require("chai");
let homeGardener = require("../homeGardener.js");

describe("Tests for homeGardener object", function () {

    describe("plantCareInstructions()", function () {
        it("correct text for succulent", function () {
            expect(homeGardener.plantCareInstructions("succulent")).to.equal("Succulents require minimal watering, indirect sunlight, and well-draining soil.");
        });

        it("correct text for vegetable", function () {
            expect(homeGardener.plantCareInstructions("vegetable")).to.equal("Vegetables need full sun, regular watering, and nutrient-rich soil.");
        });

        it("correct text for flowering", function () {
            expect(homeGardener.plantCareInstructions("flowering")).to.equal("Flowering plants require moderate watering, occasional fertilization, and pruning.");
        });

        it("correct text for tree", function () {
            expect(homeGardener.plantCareInstructions("tree")).to.equal("Trees need deep watering, proper spacing, and regular mulching.");
        });

        it("invalid plant type", function () {
            expect(homeGardener.plantCareInstructions("palmTree")).to.throw("Invalid plant type!");
        });

        it("invalid plant type", function () {
            expect(homeGardener.plantCareInstructions(11)).to.throw("Invalid plant type!");
        });
    });

    describe("availablePlants()", function () {
        it("incorrect plant arr type", function () {
            expect(homeGardener.availablePlants(7, 7)).to.throw("Invalid Information!");
        });

        it("0 element in arr", function () {
            expect(homeGardener.availablePlants([], 7)).to.throw("Invalid Information!");
        });

        it("maxHeight < 0", function () {
            expect(homeGardener.availablePlants([3, 3, 3], 0)).to.throw("Invalid Information!");
        });

        it("incorrect plant arr type", function () {
            expect(homeGardener.availablePlants('tree', 7)).to.throw("Invalid Information!");
        });

        it("correct arr incorrect num type", function () {
            expect(homeGardener.availablePlants([3, 3, 3], 'tree')).to.throw("Invalid Information!");
        });

        it("everything right", function () {
            expect(homeGardener.availablePlants([3, 3, 3], 7)).to.equal("There are 3 plants suitable for your garden height criteria!");
        });

        it("0 right", function () {
            expect(homeGardener.availablePlants([16, 33, 121], 7)).to.equal("There are 0 plants suitable for your garden height criteria!");
        });

        it("2 right", function () {
            expect(homeGardener.availablePlants([3, 3, 11], 7)).to.equal("There are 2 plants suitable for your garden height criteria!");
        });

        it("1 right", function () {
            expect(homeGardener.availablePlants([122, 45, 121], 77)).to.equal("There are 1 plants suitable for your garden height criteria!");
        });

        it("3 right exact height needed", function () {
            expect(homeGardener.availablePlants([33, 33, 33], 33)).to.equal("There are 3 plants suitable for your garden height criteria!");
        });
    });

    describe("gardenExpenses()", function () {
        it("tools not arr", function () {
            expect(homeGardener.gardenExpenses(7, ["vegetable seeds", "flower seeds"], true)).to.throw("Invalid Information!");
        });

        it("tools not arr", function () {
            expect(homeGardener.gardenExpenses('hello', ["vegetable seeds", "flower seeds"], false)).to.throw("Invalid Information!");
        });

        it("seeds not arr", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], 'hello', true)).to.throw("Invalid Information!");
        });

        it("no input", function () {
            expect(homeGardener.gardenExpenses()).to.throw("Invalid Information!");
        });

        it("seeds not arr", function () {
            expect(homeGardener.gardenExpenses(["rake", "shovel"], 'hello', false)).to.throw("Invalid Information!");
        });

        it("discount not boolean", function () {
            expect(homeGardener.gardenExpenses(["rake", "shovel"], ["vegetable seeds", "flower seeds"], 'hi')).to.throw("Invalid Information!");
        });

        it("discount not boolean", function () {
            expect(homeGardener.gardenExpenses(["rake", "shovel"], ["vegetable seeds", "flower seeds"], 123)).to.throw("Invalid Information!");
        });
        
        it("everything correct without discount", function () {
            expect(homeGardener.gardenExpenses(["rake", "shovel"], ["vegetable seeds", "flower seeds"], false)).to.equal("You spent $53.00 on tools and seeds!");
        });

        it("everything correct without discount", function () {
            expect(homeGardener.gardenExpenses(["rake", "shovel"], ["vegetable seeds", "flower seeds", "herb seeds"], false)).to.equal("You spent $56.00 on tools and seeds!");
        });

        it("everything correct with discount", function () {
            expect(homeGardener.gardenExpenses(["watering can", "shovel"], ["vegetable seeds", "vegetable seeds"], true)).to.equal("You spent $40.50 on tools and seeds with a 10% discount!");
        });

        it("everything correct with discount", function () {
            expect(homeGardener.gardenExpenses(["watering can", "shovel"], ["vegetable seeds", "flower seeds", "herb seeds"], true)).to.equal("You spent $45.90 on tools and seeds with a 10% discount!");
        });

        it("everything correct wwithout discound 0 seeds", function () {
            expect(homeGardener.gardenExpenses(["watering can", "shovel"], [], false)).to.equal("You spent $31.50 on tools and seeds!");
        });

        it("everything correct wwithout discound 0 tools", function () {
            expect(homeGardener.gardenExpenses([], ["vegetable seeds", "flower seeds", "herb seeds"], false)).to.equal("You spent $14.40 on tools and seeds!");
        });


    });

});