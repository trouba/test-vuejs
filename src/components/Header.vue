<template>
  <div class="header">
    <router-link :to="{name: 'home'}">
      <div class="logo">logo</div>
    </router-link>
    
    <div class="basket-button">
      <button type="button" class="btn btn-light cart-button">
        <i class="fas fa-shopping-cart"></i> 
        <router-link :to="{name: 'cart'}">Cart (<span>0</span>)</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #f84a1e;
  color:#fff;
  padding:20px;
}

.cart-button {

}
</style>
