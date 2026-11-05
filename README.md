[README.md](https://github.com/user-attachments/files/34414717/README.md)
# MAHLA Boutique

A ten-page clothing boutique inspired by the supplied architectural/editorial reference. The website uses plain HTML, CSS, and JavaScript, with local images and fonts.

## Open the downloaded website
Extract MAHLA-Boutique.zip, then open MAHLA-Boutique/index.html. For consistent saved-cart behavior, open the folder in VS Code and use Live Server. No npm installation is needed. An internet connection is needed only for the Google map.

## File organisation
HTML pages sit at the top level in the downloadable ZIP, matching the Costal Threads reference. Styling is in css/, interaction scripts in js/, images and fonts in assets/, and setup notes in docs/. In the hosted source repository these website files sit in dist/.

## Pages
Home, shop, product details, editorial gallery, about, contact, bag, checkout, shopping guide, and privacy/demo terms.

## Edit the catalogue
Update js/data.js with real products, prices, stock-per-size limits, images, descriptions, and sizes. Product image files are in assets/images/. The current five products are illustrative. Image and catalogue material claims are not verified.

## Cart and checkout
The cart supports separate size variants, quantity changes, stock caps, removals, saved browser storage, ZAR totals, and delivery calculations. Demo delivery is R80 or free for subtotals of R1,500 or more. Change this in js/config.js.

Checkout validates required fields, email and a four-digit postal code. It creates a local demo reference and clears the bag. No payments, email, stock reservations, or real orders are processed. Contact enquiries download a local text file; they are not transmitted.

## Maps
An interactive Google embed is available after clicking Load interactive map. It shows Cape Town generally because no store address has been supplied. See docs/GOOGLE-MAPS-SETUP.md for the official keyed API configuration.

## Accessibility and motion
Semantic navigation, labelled form fields, keyboard controls, image descriptions, live feedback, skip link, reduced-motion support, and a pause control are included. Desktop, 390 px phone and 768 px tablet layouts were checked.

## Tests
The developer repository includes tests/cart.test.mjs; run with Node.js. See docs/VERIFICATION.md for observed browser tests and limitations.
