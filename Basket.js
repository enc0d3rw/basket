var Basket = function () {
  // Данные корзины
    var products = [];

    var currencies = {
      rub: 1,
      dol: 60,
      eur: 70
    };

    var defaultCurrency = 'rub';
    var curCurrency = defaultCurrency;

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
          var index = products.
            map(function (current) { return current.id; }).
            indexOf(item.id);
  
          if (index !== -1) {
            products[index].quantity++;
            return;
          }
        }
  
        var product = new Product(item.id, item.name, item.price, 1);
        products.push(product);
      },

      // Удаляет товар из корзины
      removeProduct: function (id) {
        if (products.length >= 1) {
          var index = products.
            map(function (current) { return current.id; }).
            indexOf(id);
  
          if (index !== -1) {
            if (products[index].quantity > 1) {
              products[index].quantity--;
            } else if (products[index].quantity === 1) {
              products.splice(index, 1);
            }
          }
        }
      },

      // Устанавливает валюту
      // Если ничего не передать устанавливается валюта по умолчанию
      setCurrency: function (currency) {
        if (currency === undefined) {
          curCurrency = defaultCurrency;
        } else {
          curCurrency = currency;
        }
      },

      // Считает итоговую сумму в базовой валюте
      getBaseTotalSum: function () {
        var sum = 0;
        products.forEach(function (current) {
          sum += current.price * current.quantity;
        });
        
        return sum; 
      },

      // Считает итоговую сумму (с учетом выбранной валюты)
      getCurrencyTotalSum: function () {
        var sum = 0;
        if (currencies[curCurrency] !== 1) {
          products.forEach(function (current) {
            sum += (current.price * current.quantity) / currencies[curCurrency];
          });
        } else {
          return this.getBaseTotalSum();
        }
        
        return sum.toFixed(2);
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