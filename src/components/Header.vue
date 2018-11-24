<template>
  <div class="header">
    <div class="logo">logo</div>
    <div class="basket-button">
      <div class="button"><i class="fas fa-shopping-cart"></i> Cart (<span>0</span>) </div>
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
</style>
