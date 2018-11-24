<template>
	<div class="cart-button">
		<router-link :to="{name: 'cart'}">
			<button type="button" class="btn btn-light cart-button">
				<i class="fas fa-shopping-cart"></i> 
				Cart (<span>{{cartSize}}</span>)
			</button>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'CartButton',
	computed: {
		cartSize: function() {
			if (this.$store.state.cart.length === 0 && localStorage.getItem('cart')) {
				return JSON.parse(localStorage.getItem('cart')).length;
			} else {
				return this.$store.state.cart.length
			}
		}
	}
}
</script>

<style>
.cart-button {
	background-image: 
}
</style>
	