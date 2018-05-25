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
          var index = products
            .map(function (current) { return current.id; })
            .indexOf(item.id);
  
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
          var index = products
            .map(function (current) { return current.id; })
            .indexOf(id);
  
          if (index === -1) {
            return;
          }

          if (products[index].quantity > 1) {
            products[index].quantity--;
          } else if (products[index].quantity === 1) {
            products.splice(index, 1);
          }
        }
      },

      // Устанавливаем валюту
      // Если ничего не передать устанавливается валюта по умолчанию
      setCurrency: function (currency) {
        if (currency && currencies[currency]) {
          curCurrency = currency;
        }
      },

      // Считает итоговую сумму в базовой валюте
      getBaseTotalSum: function () {
        var total = products.reduce(function (sum, elem) {
          return sum + elem.price * elem.quantity;
        }, 0);
        
        return total; 
      },

      // Считает итоговую сумму (с учетом выбранной валюты)
      getCurrencyTotalSum: function () {
        var total = products.reduce(function (sum, elem) {
          return sum + (elem.price * elem.quantity) / currencies[curCurrency];
        }, 0);
        
        return total.toFixed(2);
      }
    };
};

module.exports = Basket();
