const prices = [100, 150, 200, 250];
const formattedPrices = prices.map((price) => price + ' р');
console.log(formattedPrices);

const users = [
  ['alex', 32],
  ['tomas', 17],
  ['olga', 14],
  ['andre', 24],
];
const adults = users.filter((user) => user[1] > 18);
console.log(adults);

const products = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 },
];
const totalCost = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalCost);
