<template>
	<div class="catalog container">
		add list of product components
		<div class="row">
			<div class="col col-lg-4 col-md-6 	 col-sm-6 col-xs-12 d-flex align-items-stretch" v-for="product in products" align="center">
				<ProductCard :product="product"></ProductCard>		
			</div>	
		</div>
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
	name: 'Catalog',
	components: {
		ProductCard,
	},
	mounted () {
		this.$store.dispatch('getProducts')
	},
	computed: mapState([
    	'products'
  	])
}
</script>

<style scoped>
.catalog {

}
</style>
