const getPrices = () => ({
  banana: 1,
  potato: 2,
  tomato: 3,
  cucumber: 4,
  salad: 5,
  apple: 6
});

const countArticles = items => items.length;

const countProducts = items =>
  items.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), [])
    .length;

const removeFreeArticles = items =>
  items.reduce(
    (acc, item) => {
      if (!acc[item]) {
        acc[item] = 0;
      }
      acc[item]++;
      if (acc[item] % 3 !== 0) {
        acc.output.push(item);
      }
      return acc;
    },
    { output: [] }
  ).output;

const calculateBasket = (items, prices) =>
  items.reduce((acc, item) => acc + prices[item], 0);

const summarizeBasket = (items, prices) => ({
  price: calculateBasket(removeFreeArticles(items), prices),
  countArticles: countArticles(items),
  countProducts: countProducts(items)
});

module.exports = {
  getPrices,
  countArticles,
  countProducts,
  removeFreeArticles,
  calculateBasket,
  summarizeBasket
};
