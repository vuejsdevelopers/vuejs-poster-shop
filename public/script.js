let LOAD_NUM = 4
let watcher;

new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [],
    results: [],
    cart: [],
    search: "JavaScript",
    lastSearch: "",
    loading: false
  },
  methods: {
    addToCart(product) {
        let found = false
        this.total += product.price
        this.cart.forEach(item => {
            if (item.id == product.id) {
                item.qty++
                found = true
            } 
        })
        if (!found) {
            this.cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                qty: 1
            })
        }
    },
    clearCart() {
          this.cart = []
      },
    inc(item) {
        item.qty +=1
        this.total += item.price
    },
    dec(item) {
        item.qty -= 1
        this.total -= item.price
       if (item.qty <= 0) {
           let indexOfCart = this.cart.indexOf(item)
           this.cart.splice(indexOfCart, 1) // non destructive method
        }
    },
    randomNum() {
        return Math.floor(Math.random() * 20) + 5; 
    },
    onSubmit() {
        this.products = []
        this.loading = true
        let path = "/search/" + this.search
        this.$http.get(path)
            .then((resp) => resp.json())
            .then(data => this.results = data.map(item => 
                ({
                id: item.id,
                title: item.title,
                price: this.randomNum(),
                link:  item.link
                })
            ))
            .then(() => 
                {
                this.lastSearch = this.search
                this.loading = false
                }
            )
            this.products = this.results
        }
  },
  filters: {
      currency(price) {
          return "£" + price.toFixed(2)
      }
  },
  created: function() {
      this.onSubmit()
  },
  updated: function() {
      let sensor = document.querySelector("#product-list-bottom");
      watcher = scrollMonitor.create(sensor)

      watcher.enterViewport(this.appendResults)
  },
  beforeUpdate: function() {
      if (watcher) {
          watcher.destroy()
          watcher = null
      }
  }
})

