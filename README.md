# NodeJs-Express-MongoDB-Basic-API-Template
###### Basic template for creating a backend API on NodeJS with Express routing and MongoDB

A very basic server-side REST API template for creating Users and their Tasks . While setting up user, the logic includes password hashing by `bcryptjs` and email validation by `validator`.
The app is written in `JavaScript` and is based on `NodeJs` framework, along with `ExpressJS` for route handling and `Mongoose` for database connecttion (handled by `mongoose`). Therefore, in order to run properly, need to begin with:
```
download NodeJS installer
install Node.JS and NPM
npm i express
npm i mongoose
npm i bcryptjs
npm i validator
```

The code enables CRUD operations on both users and tasks, which can be easily tested with POSTMAN.
This project is a very basic template for setting up a serverside app and its purpose was merely to have a starting point to a more complexed App.
