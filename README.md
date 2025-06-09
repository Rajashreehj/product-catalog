# Product Catalog with Cart (Next.js + TypeScript)

## Setup
1. Clone the repo - https://github.com/Rajashreehj/product-catalog.git
2. Run `npm install`
3. Run `npm run dev`

## Approach
1. Start Page – Product List (`/`)
- Fetched data from API
- All the product displayed using grid layout.
- On clicking on any product, it navigates to product details page.

2. Product Detail Page (`/products/:productId`)
- Fetched product details using product id.
- Displayed it in the page.
- Added "Add to Cart" button.

3. Cart
- To persist cart item, used localstorage to store cart items.
- Total items in cart is displayed in nav bar.