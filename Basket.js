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
    var newProduct = function (id, name, price, quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    };

    // Метод добавляет новый товар в корзину
    this.addProduct = function (item) {

      if (products.length >= 1) {
        var ids = products.map(function (current) {
          return current.id;
        });

        var index = ids.indexOf(item.id);

        if (index !== -1) {
          products.map(function (element) {
            if (element.id === index) {
              element.price += item.price;
              element.quantity++;
            }
          });
          return;
        }
      }

      var product = new newProduct(item.id, item.name, item.price, 1);
      products.push(product);
    };

    // Метод для тестирования, выводит все продукты
    this.getProducts = function () {
      console.log(products);
    };
};

module.exports = Basket;

// 1. у него должно быть внутреннее состояние - массив товаров и например курс из трех валют: евро, доллар, рубль
// 2. методы:
// - задать валюту
// - посчитать итоговую сумму в базовой валюте
// - посчитать итоговую сумму (с учетом выбранной валюты)
// - добавить товар (если добавляются одинаковые товары, то "схлопывать" их в один)
// - удалить товар (если товаров несколько - менять количество штук в схлопнутом товаре, иначе удалять из массива)