# Cheatset about basic Express/Node.JS backend structure

## Classic and basic structure to follow when using Node and Express for backend

### How does it work ?
The backend folder is structured as follows and should be created in this order :

#### server.js
This file is our entry point, it will contains references to the routes we will build. In this file you create an ```express``` instance, I also use ```body-parser``` to make the body stick to JSON format. It will also contains
a global error handler middleware that will take care of every error that is not handled in ```middleware.js```.
The ```use``` method is used to give some precision, options and routes to our app. The ```listen``` method will
simply start our server.

#### Services
- Used to configure connection to the db (can be separated and placed in a config folder).
- Used to provide the interactions/operations with the db that the ```controller``` will be using.
- Async calls are widely used.

#### Middlewares
- Used to validate, authenticate data.
- Access to req, res, next.
- Are called sequentially, thus the next function.

#### Controllers
- Require and use ```user.services.js```.
- Try or catch depending on req.
- Send to res with a special code according to if the operation worked or not.
- May use middlewares.

#### Routes
- Require and use controllers and middlewares.
- Create the endpoints/route where our controllers will be called.

List of useful status:
- 102: processing
- 200: OK
- 400: bad request
- 401: unauthorized
- 404: not found
- 500: internal server error