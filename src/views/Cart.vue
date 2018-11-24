<template>
	<div class="cart container">
		<div class="card" v-if="displayCart">
			<div class="card-header">
				Featured
			</div>
			<ul class="list-group list-group-flush" >
				<transition-group name="fade">
					<li class="list-group-item" v-for="productGroup in productGroups" :key="productGroup[0].id">
						<CartProduct :productGroup="productGroup" ></CartProduct>
					</li>
				</transition-group>
			</ul>
		</div>
		<div v-else>
			<p>Your cart is empty</p>
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
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

</style>
