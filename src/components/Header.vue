<template>
	<div class="header">
		<div class="header-left">
			<router-link :to="{name: 'home'}" class="logo">
				<img src="../assets/logo.png">
				<span class="logo-text">LIBYK</span>
			</router-link> 
			<router-link :to="{name: 'home'}" class="header-link text-primary" exact>
				Catalog
			</router-link>
		</div>
		<div class="header-right">
			<CartButton></CartButton>
		</div>
		
		
	</div>
</template>

<script>
import CartButton from '@/components/CartButton.vue'

export default {
	name: 'Header',
	components: {
		CartButton
	},
	computed: {
		headerLinkActive: function() {
			return true;
		}
	}
}
</script>

<style>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color:#fff;
	padding:20px;
	height: 90px;
}
.header-left {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.logo {
	display: flex;
	margin-right: 50px;
}

.logo img {
	height: 40px;
	margin-right: 10px;
	display: flex;	
    align-items: center;
}

.logo-text {
	font-weight: bold;
    font-size: 2rem;
}

.header-link {
	font-weight: bold;
	border-bottom: solid 2px transparent;
}

.header-link:hover {
	text-decoration: none;
	border-bottom: solid 2px #7cb4f9;
}

a.header-link.router-link-active {
	border-bottom: solid 2px #007bff;
}
</style>
