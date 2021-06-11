# MERN-eCommerce

This eCommerce App was created with MERN Stack.

Live Link : https://mern-ecommerce-webapp.herokuapp.com/

## Features

- shopping cart (Add, remove, update stock etc.)
- Product reviews and ratings
- Top products carousel
- pagination (if product on page > 8)
- Product search feature (keyword matching with name of product)
- User profile with My Orders and Update Profile Section
- Admin product management (CRUD operation)
- Admin user management (CRUD Operations)
- Admin Order details page
- Mark orders as delivered option (for Admins and paid order only)
- Checkout process (shipping address, payment method along with time)
- PayPal Payment API (Sandbox)
- Database seeder (loading of some dummy data)

## Note on Issues

Please do not post issues here as it could be related to your own code and concerns rather when taking the course, post those in Udemy Q/A section. If you clone THIS repo and there are issues, then you can submit it as well.

Here is the course link : https://www.udemy.com/course/mern-ecommerce/

## Usage

### Usage of ES Modules in NodeJS

We have used ES Modules in the backend of this project. Make sure to have at least Node v14.6+ or you will be required to add the "--experimental-modules" flag.

Also, when importing a file (not a package), make sure sure to add .js at the end of line in order to avoid "module not found" error

### Environment Variables

Create a .env file (yes, name of file is only ".env")

Please note you'll have to stop & restart server for every changes in .env file and it should be located in your root folder

don't forget to set this up in your .gitignore to avoid publishing of your private MONGO_URI and PAYPAL_CLIENT_ID

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = abc123
PAYPAL_CLIENT_ID = your paypal client id
```

### Installing All Dependencies

```
npm install
cd frontend
npm install
```

### Running your App

```
# Running frontend (:3000) & backend (:5000) (backend PORT will be used as proxy)
npm run dev

# Running backend only
npm run server

# Running frontend only (won't be able to see it properly as it uses APIs from backend)
npm run client
```

### Seeding Dummy Data Database

You can use the following commands in order to seed the database with some sample users and products as well as use following command to destroy all data

this will import only the data which is present in backend/data folder and for destroying it will destroy all you data (in case you've your added products, user and orders using admin or user functionality) so be careful while using destroy operation and also if you destroy and reimport again it will only re-import it will only import data which is available in user directory of backend/data.

note: your mongoDB connection proper link should be set in .env otherwise be ready for errors

```
# Importing dummy data
npm run data:import

# Destroying seeded data
(Caution : all data will be gone either seeded or manually added all of this will be destroyed)
npm run data:destroy
```

```
Sample User Logins (Applies only if you've imported data using above commands)

note: password policy won't apply to manually imported data

admin@proshop.com (Admin)
123456

gaurang@gmail.com(user)
123456
```

## Errors

Errors that you see on page or in Postman are manually handled error messages so do not get surprised if you Google error and don't get resolution on stack overflow 😜
