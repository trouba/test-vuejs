<template>
	<div class="header">
		<router-link :to="{name: 'home'}">
			<div class="logo">
				<img src="../assets/logo.png">
				<span class="logo-text">LIBYK</span>
			</div>
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
	align-items: center;
	color:#fff;
	padding:20px;
	height: 90px;
}

.logo img {
	height: 40px;
	margin-right: 10px;
	display: flex;	
    align-items: center;
}

.logo-text {
	font-weight: bold;
    font-size: 2rem;
}

</style>
