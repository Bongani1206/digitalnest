# DigitalNest AI Store

A responsive static storefront for DigitalNest AI.

The catalogue now lists 30 original PDF resources supplied separately in `DigitalNest-AI-30-Products.zip`. Each filename is mapped by ID in the included `catalogue.csv`. Prices are suggested launch prices and should be reviewed before activating payments.

## Included
- Homepage / hero section
- Product catalogue
- Category filters
- Shopping cart
- Checkout review with customer email and order summary
- Newsletter form
- FAQ
- Mobile responsive layout
- South African Rand pricing

## Run locally
Open `index.html` in a browser.

## Before going live
PayFast payment is not active yet. The checkout button stays disabled until `checkoutApiUrl` in `script.js` points to a secure HTTPS service. That service must accept `{ email, productIds }`, derive prices from its own catalogue, create the order, and return `{ redirectUrl }` for PayFast. Do not place merchant keys or a passphrase in browser code. Verify PayFast's payment notification before marking an order paid or releasing files. Replace the sample products with real products and prices, upload deliverable files securely, and arrange email/download delivery before enabling payments.

Suggested production additions:
- PayFast / Peach Payments / Stripe
- Customer account or email delivery
- Secure file storage for downloads
- Analytics
- Domain + HTTPS
- Privacy policy, terms and refund policy
