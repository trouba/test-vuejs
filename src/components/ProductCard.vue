<template>
	<div class="card product-card" style="width: 15rem;">
		<img class="card-img-top" v-bind:src="productPicture" alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title product-title">{{ productTitle }}</h5>
			<p class="card-text">{{ productDescription }}</p>
			<a href="#" class="btn btn-primary" v-on:click="addToCart(product)">Add to cart</a>
		</div>
	</div>
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
			this.$store.dispatch('addToCart', this.product)
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

</style>
