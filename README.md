# ECommerce 

## Project Description

The main goal of this project was the create an ecommerce platform utilizing Angular, NodeJs and MySql database.It is a web platform that allows users to sign up and login into their accounts, view products, filter through products and add to cart 

## Database Structure 

Using MySql created two tables 

1. Products Table - has two API request GET and POST. The GET request responds with all the products data to allow users to see what is avaliable, The Post request updates the amount of products avaliable when a user purchases a product

2. Users Table = has one API request post request, with two endpoints. One endpoint is Register to allow new users to register and be added to the Users Table. The other endpoint is Login to authticate users against the database to see if they have an account

## Key Funtionalities and Features 

1. Sign Up Funtionality - it makes sures user inputs correct email, password and confirm password are equal. It also will notifiy user is email address is already in database

2. Login Functionality - Makes sure email and password are correct, and will only let user in if they are in the database

3. Home Page - Shows Users all products in database, where a user can click on an item and add to cart
4. Navbar - Allow users to filter through what products they want to see, and routes to their carts and log out
5. Cart - Shows all products in users carts, and on checkout it will update quanitity of products in database


## Improvements 

1. Database Payload - The navbar component filters through all the products, this means a get request of the entire products table is still made when only a few products are only needed. This is room for improvement to only get products that are needed to save overhead

2. Remover Button from Cart - A button to allow users to remove unwanted items from cart

3. Payment Integration - Involve actually payment system to make this a real ecommerce app


