# workshop-mocha-noob

Workshop to learn the basics of Mocha into a Node.js environment.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests & lint

To launch the tests.

	npm test

To lint sources.

	npm run lint

### Start

To start program.

	npm start

## Exercises

Please verify that after all exercises the tests and the linter should not return errors.

### Synopsis

You have a fruit shop, on every 3 same products, you offer the third.

You want to start a business online, so your software should be able to return the details of a basket.

### Exercise 1

A function +getPrices+ that doesn't take parameter should return an object which describes the prices of your products.

```javascript
// For example
console.log(getPrices()) // { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 }
```

Add tests into file **_test/shop-tools.test.js_**. that will verify this assertion.

Add the function +getPrices+ into file **_src/shop-tools.js_**.

:point_right: [function `.eql`](http://chaijs.com/api/bdd/#method_eql) from Chai should help you.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 1"

### Exercise 2

A function +countArticles+ that take one parameter (an array) should return the number of the elements in an array.

```javascript
// For example
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
console.log(countArticles(products)) // 10
```

Add tests into file **_test/shop-tools.test.js_**. that will verify this assertion.

Add the function +countArticles+ into file **_src/shop-tools.js_**.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 2"

### Exercise 3

A function +countProducts+ that take one parameter (an array) should return the number of distinct elements in a array.

```javascript
// For example
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
console.log(countProducts(products)) // 4
```

Add tests into file **_test/shop-tools.test.js_**. that will verify this assertion.

Add the function +countProducts+ into file **_src/shop-tools.js_**.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 3"

### Exercise 4

A function +removeFreeArticles+ that take one parameter (an array) should return an array where the business discount will be applied.

```javascript
// For example
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
console.log(removeFreeArticles(products)) // [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato' ]
```

Add tests into file **_test/shop-tools.test.js_**. that will verify this assertion.

Add the function +removeFreeArticles+ into file **_src/shop-tools.js_**.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 4"

### Exercise 5

A function +calculateBasket+ that take two parameters (two array) should calculate the price of the basket.

```javascript
// For example
const prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
const products = [ 'tomato', 'cucumber', 'salad'];
console.log(calculateBasket(products, prices)) // 12
```

Add tests into file **_test/shop-tools.test.js_**. that will verify this assertion.

Add the function +calculateBasket+ into file **_src/shop-tools.js_**.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 5"

### Exercise 6

A function +summarizeBasket+ that take two parameters (two array) should build our expected result.

```javascript
// For example
const prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
console.log(summarizeBasket(products, prices)) // { price: 25, countArticles: 10, countProducts: 4 }
```

Add tests into file **_test/shop-tools.test.js_**. that will verify this assertion.

Add the function +summarizeBasket+ into file **_src/shop-tools.js_**.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 6"
