import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: Home,
		pathToRegexpOptions: { strict: true } 
	},
	{
		path: '/cart',
		name: 'cart',
	  	component: Cart,
	  	pathToRegexpOptions: { strict: true } 
	}
	]
})
