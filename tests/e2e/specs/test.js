// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'Add to cart from catalog page': browser => {
		browser
		.url(process.env.VUE_DEV_SERVER_URL)
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
		.end()
	},
	'Remove from cart': browser => {
		browser
		.url(process.env.VUE_DEV_SERVER_URL + 'cart')
		.assert.elementPresent('.product-group')

		.end()
	},

}
