<template>
	<div class="cart container">
		<div class="card" v-if="displayCart">
			<div class="card-header cart-list-header">Items</div>
			<ul class="list-group list-group-flush" >
				<transition-group name="fade">
					<li class="list-group-item" v-for="productGroup in productGroups" :key="productGroup[0].id">
						<CartProduct :productGroup="productGroup" ></CartProduct>
					</li>
				</transition-group>
			</ul>
		</div>
		<div class="cart-empty" v-else>
			<div class="cart-empty__message">
				<h1>Your cart is empty</h1>
				<p>You might want to go back to
					<router-link :to="{name: 'home'}">
						<span>our products page <i class="fas fa-arrow-right"></i></span>
					</router-link>
				</p>
				<img src="../assets/sad.svg">				
			</div>
		</div>
	</div>
</template>

<script>
import CartProduct from '@/components/CartProduct.vue'
import _ from 'lodash'; 

export default {
	name: 'Cart',
	components: {
		CartProduct
	},
	data: function () {
		return {
			cart: this.$store.state.cart, 
			groupedCart: this.groupItems	
		}
	},
	computed: {
		productGroups: function(){
			return _.groupBy(this.$store.state.cart, 'id');
		},
		displayCart: function(){
			return this.$store.state.cart.length > 0;
		}
	},
}
</script>

<style scoped>
.cart {
	padding-top: 20px;
	padding-bottom: 20px;
	min-height: calc(100vh - 90px);
}

.cart-list-header {
	text-align:left;
}

.fade-leave-active {
	transition: opacity .3s;
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.cart-empty__message img {
	width: 50vw;
}
</style>
