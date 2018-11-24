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

}
</script>

<style scoped>
.catalog {
  
}
</style>
