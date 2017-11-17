const expect = require("chai").expect;

const lib = require("../src/shop-tools");

describe("In library shop-tools", function() {
  describe("function getPrices()", function() {
    it("should return the array of prices", function() {
      expect(lib.getPrices()).to.be.eql({
        banana: 1,
        potato: 2,
        tomato: 3,
        cucumber: 4,
        salad: 5,
        apple: 6
      });
    });
  });
});
