<template>
  <div class="home">
    <Banner></Banner>
    <Catalog></Catalog>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Catalog from '@/components/Catalog.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Catalog
  }
}
</script>
