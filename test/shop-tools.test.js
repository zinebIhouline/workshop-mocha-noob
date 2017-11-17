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

  describe("function countArticles()", function() {
    it("should return 0 with empty array", function() {
      expect(lib.countArticles([])).to.be.eql(0);
    });
    it("should return length of an array", function() {
      const products = [
        "tomato",
        "cucumber",
        "tomato",
        "salad",
        "potato",
        "cucumber",
        "potato",
        "potato",
        "tomato",
        "potato"
      ];
      expect(lib.countArticles(products)).to.be.eql(10);
    });
  });

  describe("function countProducts()", function() {
    it("should return 0 with empty array", function() {
      expect(lib.countProducts([])).to.be.eql(0);
    });
    it("should return number of products of an array", function() {
      const products = [
        "tomato",
        "cucumber",
        "tomato",
        "salad",
        "potato",
        "cucumber",
        "potato",
        "potato",
        "tomato",
        "potato"
      ];
      expect(lib.countProducts(products)).to.be.eql(4);
    });
  });

  describe("function removeFreeArticles()", function() {
    it("should return empty array with empty array", function() {
      expect(lib.removeFreeArticles([])).to.be.eql([]);
    });
    it("should return the array without free articles", function() {
      const inputProducts = [
        "tomato",
        "cucumber",
        "tomato",
        "salad",
        "potato",
        "cucumber",
        "potato",
        "potato",
        "tomato",
        "potato"
      ];
      const outputProducts = [
        "tomato",
        "cucumber",
        "tomato",
        "salad",
        "potato",
        "cucumber",
        "potato",
        "potato"
      ];
      expect(lib.removeFreeArticles(inputProducts)).to.be.eql(outputProducts);
    });
  });

  describe("function calculateBasket()", function() {
    it("should return 0 with empty array", function() {
      expect(lib.calculateBasket([])).to.be.eql(0);
    });
    it("should return number of products of an array", function() {
      const prices = {
        banana: 1,
        potato: 2,
        tomato: 3,
        cucumber: 4,
        salad: 5,
        apple: 6
      };
      const products = ["tomato", "cucumber", "salad"];
      expect(lib.calculateBasket(products, prices)).to.be.eql(12);
    });
  });

  describe("function summarizeBasket()", function() {
    const prices = {
      banana: 1,
      potato: 2,
      tomato: 3,
      cucumber: 4,
      salad: 5,
      apple: 6
    };
    it("should return 0 with empty array", function() {
      expect(lib.summarizeBasket([], prices)).to.be.eql({
        price: 0,
        countArticles: 0,
        countProducts: 0
      });
    });
    it("should return number of products of an array", function() {
      const products = [
        "tomato",
        "cucumber",
        "tomato",
        "salad",
        "potato",
        "cucumber",
        "potato",
        "potato",
        "tomato",
        "potato"
      ];
      expect(lib.summarizeBasket(products, prices)).to.be.eql({
        price: 25,
        countArticles: 10,
        countProducts: 4
      });
    });
  });
});
