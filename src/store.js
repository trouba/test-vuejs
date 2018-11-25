import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import _ from 'lodash'

Vue.use(Vuex, axios, VueAxios)

export default new Vuex.Store({
	state: {
		pagination: 1,
		products: [],
		cart: []
	},
	mutations: {
		SET_PRODUCTS (state, products) {
			state.products = state.products.concat(products)
		},
		RETRIEVE_LOCAL_STORAGE_CART (state, localCart) {
			state.cart = localCart
		},
		ADD_TO_CART (state, product) {
			state.cart.push(product)			
		},
		REMOVE_FROM_CART (state, removedProduct) {
			let updatedCart = state.cart
			
			updatedCart = _.filter(updatedCart, function(product) { 
				return product.id != removedProduct.id;
			});

			state.cart = updatedCart
		},
		INCREMENT_PAGINATION (state) {
			state.pagination++
		}, 
	},
	actions: {
		getProducts ({ commit }) {
			const source = 'https://jsonplaceholder.typicode.com/posts?_page=' + this.state.pagination
			axios
			.get(source)
			.then(r => r.data)
			.then(products => {
				if (products.length > 1) {
					commit('SET_PRODUCTS', products)
					commit('INCREMENT_PAGINATION')
				} else {
					console.log('no more products')
				}
			}).catch(error => {
				console.log(error.response)
			});

		},
		retrieveLocalStorageCart ({commit}){
			if (localStorage.getItem('cart') && localStorage.getItem('cart') !== 'undefined') {
				let localCart = JSON.parse(localStorage.getItem('cart'));
				commit('RETRIEVE_LOCAL_STORAGE_CART', localCart)
			}	
		},
		addToCart ({ commit }, product) {
			commit('ADD_TO_CART', product)
		},
		removeFromCart({commit}, product) {
			commit('REMOVE_FROM_CART', product)
		}
	}
})