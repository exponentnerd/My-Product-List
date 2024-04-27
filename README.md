# React + Vite

# Geeky NG Screening assessment project 

# Instruction 

Build a product list page using React and any other tool of your choice by doing the following 
Display a list of products using dummy products
Each Product should have a product name and product price
Make the page responsive
Add pagination and make it just 2 pages

# Steps to Solution
Display a list of products using dummy products: The ProductList component renders a list of products fetched from the products array imported from the ../data/product file. Each product is displayed as a Card component with its name and price.
Each Product should have a product name and product price: Each product displayed in the list includes its name and price within the Card component.
Make the page responsive: The page is designed to be responsive by utilizing Bootstrap components (Card, Pagination) and classes (text-center, mb-4, d-flex, justify-content-center) to ensure proper alignment and layout across different screen sizes.
Add pagination and make it just 2 pages: Pagination is implemented using the Pagination component from react-bootstrap. The number of products per page is set to 2 (const productsPerPage = 2), and pagination controls are added to navigate between pages. If the number of products exceeds 2, pagination controls allow switching between pages.


# Installation
I  bootstrap the project using npm create vite

clone the repository @ https://github.com/exponentnerd/My-Product-List.git

on your terminal run npm intall to install all the packages 

npm run dev on your local terminal to start the application 

to view the project live visit `https://my-product-list-theta.vercel.app/`
