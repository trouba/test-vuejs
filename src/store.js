import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, axios, VueAxios)

export default new Vuex.Store({
	state: {
		products: [],
		cart: []
	},
	mutations: {
		SET_PRODUCTS (state, products) {
			state.products = products
		},
		ADD_TO_CART (state, product) {
			state.cart.push(product)
		}
	},
	actions: {
		getProducts ({ commit }) {
			axios
			.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
			.then(r => r.data)
			.then(products => {
				commit('SET_PRODUCTS', products)
			})
		},
		addToCart ({ commit }, product) {
			commit('ADD_TO_CART', product)
		}
	}
})


