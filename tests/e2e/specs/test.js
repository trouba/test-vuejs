// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

let home_url = process.env.VUE_DEV_SERVER_URL
let cart_url = 'http://localhost:8000/'

module.exports = {
	'Add to cart from catalog page': browser => {
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
		.click('.product-card:first-of-type .btn')
		.assert.containsText('.badge-light', '1')
		.click('.product-card:first-of-type .btn')
		.assert.containsText('.badge-light', '2')
		.click('.cart-button')
		.assert.containsText('.badge-light', '2')
		.assert.elementPresent('.cart')
		.assert.elementCount('.product-group', 1)
		.assert.containsText('.product-infos span', 'unt aut facere repellat provi...')
		.assert.containsText('.product-group .btn span', 'Remove 2 items')
		.click('.product-group .btn')
		.assert.containsText('.badge-light', '0')
		.assert.containsText('p', 'Your cart is empty')



		.end()
	},


}