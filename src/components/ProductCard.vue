<template>
	<transition name="fade">
	<div class="card product-card">
		<img class="card-img-top" v-bind:src="productPicture" alt="Card image cap">
		<div class="card-body product-content">
			<div class="product-infos">
				<h5 class="card-title product-title text-primary">{{ productTitle }}</h5>
				<p class="card-text">{{ productDescription }}</p>	
			</div>
			<div class="product-actions">
				<button class="btn btn-primary" v-on:click="addToCart(product)">
					<i class="fas fa-plus product-card__button-icon"></i>
					<span>Add to cart</span>
				</button>
			</div>
			
		</div>
	</div>
	</transition>
</template>

<script>

export default {
	name: 'ProductCard',
	props: {
		product: {
			type: Object
		}
	}, 
	computed: {
		productPicture: function () {
	      return 'https://picsum.photos/400/200?image=' + this.product.id * 2 
	    },
	    productTitle: function(){
	    	return this.cutString(this.product.title, 12);
	    },
	    productDescription: function(){
	    	return this.cutString(this.product.body, 100)
	    },
	},
	methods: {
		cutString: function (string, length){
			return string.length > length ? string.substring(1, length) + '...' : string
		},
		addToCart: function (product){
			this.$store.dispatch('addToCart', product);
			localStorage.setItem('cart', JSON.stringify(this.$store.state.cart));
		}
	}
}
</script>

<style scoped>
.product-card {
	margin-bottom: 20px;
}

.product-title {
	text-transform: uppercase;
}

.product-card__button-icon {
	margin-right:5px;
}

.product-actions {
	margin-top: 10px;
}

.product-content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

</style>
