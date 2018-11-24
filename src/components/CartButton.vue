<template>
	<div class="cart-button">
		<button type="button" class="btn btn-light cart-button">
			<i class="fas fa-shopping-cart"></i> 
			<router-link :to="{name: 'cart'}">Cart (<span>{{cartSize}}</span>)</router-link>
		</button>
	</div>
</template>

<script>
export default {
	name: 'CartButton',
	computed: {
		cartSize: function() {
			return this.$store.state.cart.length
		}
	}
}
</script>

<style>
.cart-button {
	background-image: 
}
</style>
	