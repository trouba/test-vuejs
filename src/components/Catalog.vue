<template>
	<div class="catalog container">
		add list of product components
		<div class="row">
			<div class="col " v-for="product in products" align="center">
				<ProductCard :product="product"></ProductCard>		
			</div>	
		</div>
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

export default {
	name: 'Catalog',
	components: {
		ProductCard,
	},
	data: function () {
		return {
			products: [
			{
				id: 1,
				name: 'pomme',
			},
			{
				id: 2,
				name: 'poire',
			},
			]
		}
	},
	mounted () {
		this.axios
			.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
			.then(response => (console.log(response)))
		}
}
</script>

<style scoped>
.catalog {

}
</style>
