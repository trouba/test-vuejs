<template>
	<div class="header">
		<router-link :to="{name: 'home'}">
			<div class="logo">logo</div>
		</router-link>
		<CartButton></CartButton>
	</div>
</template>

<script>
import CartButton from '@/components/CartButton.vue'

export default {
	name: 'Header',
	components: {
		CartButton
	},
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	color:#fff;
	padding:20px;
}

</style>
