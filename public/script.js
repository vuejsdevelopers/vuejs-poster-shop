var PRICE = 9.99;
var LOAD_NUM = 10;

new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [],
    results: [],
    cart: [],
    newSearch: 'anime',
    lastSearch: '',
    loading: false,
    price: PRICE
  },
  mounted: function() {
    this.onSubmit();
    var elem = document.getElementById('product-list-bottom');
    var watcher = scrollMonitor.create(elem);
    var vue = this;
    watcher.enterViewport(function() {
      vue.appendItems();
    });
  },
  filters: {
    currency: function(price) {
      return '$'.concat(price.toFixed(2));
    }
  },
  methods: {
    appendItems: function() {
      if (this.items.length < this.results.length) {
        var append = this.results.slice(this.items.length, this.items.length + LOAD_NUM);
        this.items = this.items.concat(append);
      }
    },
    onSubmit: function() {
      this.lastSearch = this.newSearch;
      this.loading = true;
      this.items = [];
      this.results = [];
      this.$http
        .get('/search/'.concat(this.newSearch))
        .then(function(res) {
          this.loading = false;
          this.results = res.data;
          this.appendItems();
        })
      ;
    },
    addItem: function(index) {
      var item = this.items[index];
      var found = false;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          this.cart[i].qty++;
          found = true;
        }
      }
      if (!found) {
        this.cart = this.cart.concat({
          id: item.id,
          title: item.title,
          qty: 1,
          price: PRICE
        });
      }
      this.total += PRICE;
    },
    inc: function(item) {
      item.qty++;
      this.total += PRICE;
    },
    dec: function(item) {
      item.qty--;
      this.total -= PRICE;
      if (item.qty <= 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  }
});
