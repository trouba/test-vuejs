<template>
	<div class="product-group">
		<div class="product-infos">
			<span>{{ productTitle }}</span>
		</div>
		<button class="btn btn-danger" v-on:click="removeFromCart(productGroup)">
			<i class="fas fa-trash-alt"></i>
			<span>Remove {{ productGroup.length }} {{ deleteLabel }}</span>
		</button>
	</div>
	
</template>

<script>

export default {
	name: 'ProductCard',
	props: {
		productGroup: {
			type: Array
		}
	}, 
	computed: {
		productPicture: function () {
			return 'https://picsum.photos/400/200?image=' + this.productGroup[0].id * 2 
		},
		productTitle: function() {
			let productTitle = this.productGroup[0].title

			// Capitalize first letter
			productTitle = productTitle.charAt(0).toUpperCase() + this.productGroup[0].title.slice(1);

			return this.cutString(productTitle, 30);
		},
		deleteLabel: function() {
			return this.productGroup.length > 1 ? 'items' : 'item'
		}
	},
	methods: {
		cutString: function (string, length){
			return string.length > length ? string.substring(1, length) + '...' : string
		},
		removeFromCart: function(productGroup) {
			this.$store.dispatch('removeFromCart', productGroup[0]);
			localStorage.setItem('cart', JSON.stringify(this.$store.state.cart));
		}
	}
}
</script>

<style scoped>
.product-group {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

</style>
