<template>
	<div class="catalog container">
		add list of product components
		<div class="row">
			<div class="col col-lg-4 col-md-6 	 col-sm-6 col-xs-12 d-flex align-items-stretch" v-for="product in products" align="center" :key="product.id">
				<ProductCard :product="product"></ProductCard>
			</div>
		</div>
		<div class="row" v-if="!hideLoadMore">
			<div class="col">
				<button type="button" class="btn btn-outline-primary load-button" v-on:click="loadMoreProducts">Load more</button>				
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
	name: 'Catalog',
	data: function() {
		return {
			hideLoadMore: false
		}
	},
	components: {
		ProductCard,
	},
	mounted () {
		this.$store.dispatch('getProducts')
	},
	computed: mapState([
		'products'
		]),
	methods: {
		loadMoreProducts: function() {
			this.$store.dispatch('getProducts')
		}
	}
}
</script>

<style scoped>
.catalog {
	padding-bottom: 50px;
}

.load-button {
	width: 100%
}

.fade-enter-active {
	transition: opacity .3s;
}
.fade-enter {
	opacity: 0;
}
</style>
