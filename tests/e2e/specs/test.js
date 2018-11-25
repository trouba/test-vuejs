// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

let home_url = process.env.VUE_DEV_SERVER_URL
let cart_url = 'http://localhost:8000/'

module.exports = {
	'Add to cart from catalog page and empty cart from cart page': browser => {
		browser
		.url(home_url)
		.waitForElementVisible('#app', 5000)
		.assert.elementPresent('.catalog')
		
		// wait for products to load
		.waitForElementVisible('.product-card', 1000)
		.assert.elementCount('.product-card', 10)
		.assert.containsText('h5', 'UNT AUT FAC...')
		.assert.containsText('.badge-light', '0')
		.assert.elementPresent('.product-card:first-of-type .btn')

		// add the first product twice to cart
		.click('.product-card:first-of-type .btn')
		.assert.containsText('.badge-light', '1')
		.click('.product-card:first-of-type .btn')
		.assert.containsText('.badge-light', '2')

		//go to cart page
		.click('.cart-button')
		.assert.containsText('.badge-light', '2')
		.assert.elementPresent('.cart')
		.assert.elementCount('.product-group', 1)
		.assert.containsText('.product-infos span', 'unt aut facere repellat provi...')
		.assert.containsText('.product-group .btn span', 'Remove 2 items')

		//empty cart
		.click('.product-group .btn')
		.assert.containsText('.badge-light', '0')
		.assert.containsText('h1', 'Your cart is empty')

		.end()
	},
}