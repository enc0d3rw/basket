// Массив товаров
var products = [
    {id: 0, name: 'product1', description: 'description01', image: 'photo.jpg', price: 1000},
    {id: 1, name: 'product2', description: 'description02', image: 'product-photo.png', price: 1300}
];

var Basket = require('./Basket');
Basket.addProduct(products[0]);
Basket.addProduct(products[0]);
Basket.addProduct(products[0]);
Basket.addProduct(products[0]);
Basket.addProduct(products[1]);
Basket.getProducts();
console.log('-------------------');

Basket.removeProduct(products[0].id);
Basket.removeProduct(products[0].id);
Basket.removeProduct(products[1].id);
Basket.getProducts();
console.log('-------------------');

console.log(Basket.getBaseTotalSum());
Basket.setCurrency('dol');
console.log(Basket.getCurrencyTotalSum());