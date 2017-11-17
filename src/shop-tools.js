exports.getPrices = () => ({
  banana: 1,
  potato: 2,
  tomato: 3,
  cucumber: 4,
  salad: 5,
  apple: 6
});

exports.countArticles = items => items.length;

exports.countProducts = items =>
  items.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), [])
    .length;

exports.removeFreeArticles = items =>
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
