
new Vue({
    el: "#app",
    data: {
        total: 0
    },
    methods: {
        addToCart() {
            this.total += 9.99
        }
    }
})