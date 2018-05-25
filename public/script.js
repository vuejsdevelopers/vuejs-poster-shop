Vue.config.devtools = true;

new Vue({
	el: '#app',
	data: {
		total: 0,
		items: [
			{ id: 1, title: 'Item 1' },
			{ id: 2, title: 'Item 2' },
			{ id: 3, title: 'Item 3' }
		],
		cart: []
	},
	methods: {
		addItem: function(index) {
			this.total += 9.99;
			var item = this.items[index];
			var found = false;
			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === item.id) {
					found = true;
					this.cart[i].qty++;
				}
			}
			if (!found) {
				this.cart.push({
					id: item.id,
					title: item.title,
					qty: 1
				});
			}
		}
	}
});
