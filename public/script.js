
new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [
        { title: "product1", id: 1, price: 9.99},
        { title: "product2", id: 2, price: 9.99},
        { title: "product3", id: 3, price: 9.99}
    ],
    cart: []
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
    inc(item) {
        item.qty +=1
        this.total += item.price
    },
    dec(item) {
       if (item.qty > 0) {
            item.qty -= 1 
            this.total -= item.price

        }
    }
  },
  filters: {
      currency(price) {
          return "£" + price.toFixed(2)
      }
  }
})