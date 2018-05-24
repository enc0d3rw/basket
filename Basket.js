var Basket = function () {
  // Данные корзины
    var products = [
      // {id: 0, title: 'product2', price: 2600, quantity: 2},
      // {id: 1, title: 'product1', price: 1000, quantity: 1}
    ];

    var currencies = {
      rub: 0,
      dol: 60,
      eur: 70
    };

    var defaulCurency = 'rub';
    var curCurency = 'rub';

    // Функция конструктор которая создает товар
    var Product = function (id, name, price, quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    };

    return {
      // Метод добавляет новый товар в корзину
      addProduct: function (item) {

        if (products.length >= 1) {
          var index = products.map(function (current) { return current.id; }).indexOf(item.id);
  
          if (index !== -1) {
            products[index].price += item.price;
            products[index].quantity++;
            return;
          }
        }
  
        var product = new Product(item.id, item.name, item.price, 1);
        products.push(product);
      },

      // Метод для тестирования, выводит все продукты
      getProducts: function () {
        console.log(products);
      }
    };
};

module.exports = Basket();

// 1. у него должно быть внутреннее состояние - массив товаров и например курс из трех валют: евро, доллар, рубль
// 2. методы:
// - задать валюту
// - посчитать итоговую сумму в базовой валюте
// - посчитать итоговую сумму (с учетом выбранной валюты)
// - добавить товар (если добавляются одинаковые товары, то "схлопывать" их в один)
// - удалить товар (если товаров несколько - менять количество штук в схлопнутом товаре, иначе удалять из массива)