**Project overview**

This website is made with [Vue.js](https://vuejs.org/).
It uses [Vue router](https://router.vuejs.org/) and [Vuex](https://vuex.vuejs.org/).

**Installation**

Clone the repository locally and run

    npm install

**Run locally**

Run

    npm run serve

**E2E test**

End-to-end tests are made with [Nightwatch.js](http://nightwatchjs.org/)
To launch tests, run 

    npm run test:e2e

**Project specifications**


- Each page must have a navbar with a “PRODUCT” link and a “CART (0)” link (where 0 is
replaced by the amount of items in the cart)

Product page

- Create a “product” page with a list of products, that you get from a rest api (example of
fake api: JSONPlaceholder - Fake online REST API for developers)
- Each product must have a “ADD TO CART” button
- When clicking on each “ADD TO CART” button, add the corresponding product to the cart

Cart page
- Create a Cart page with the products list added to the cart
- It shouldn’t have duplicates of the same product if added multiple times
- If multiple items of the same product were added to the cart, the amount of each item
must be visible in the cart page (no duplicates item rows)
- Each product in the cart must have a “Remove” button to remove all the amount of actual
product from the list
- If the cart is empty, a “Your cart is empty” message must be visible
- We should be able to persist the cart even after closing the tab and reopening the website


Bonus:
Add end-to-end testing where the scenario is:

- Go to the product page
- Add twice the first item in the cart
- Go to the cart page
- Check if the cart contain 2x the added item
- Empty the cart
- Check if the cart is empty and show the “Your cart is empty” message
