# ASSIGNMENT 8

- Name: Nishigandha Patel
- NUID: 002659174

## Topic: Assignment 8th use of CRUD operations with the help Node, Mongo, and Express on Postman

### Project aspects:

created a file called app.js that would be used to connect to MongoDB and execute 127.0.0.1 on port 27017.

- Routers -> Each action generates a userRouter that connects to the appropriate controller.
- Controllers -> In userControllers, a separate method is constructed using await and async handling to carry out each operation on the mongodb.
- Models -> The user table's structure is specified in userModel, and the database password is also bcrypted before being saved.
- Middlewares -> All generic errors, such as "Not Found" (400) and "Success" (201), are specified in errorMiddlewares.

#### Setup:

- Launch VS Code, open the app.js file, and type "nodemon run start" in the terminal.
- Launch Postman and begin working with the URLs listed below.
eg.
  - POST -> http://127.0.0.1:3000/user/create
  - PUT -> http://127.0.0.1:3000/user/edit/?nishi@gmail.com
  - DELETE -> http://127.0.0.1:3000/user/delete/nishi@gmail.com
  - GET -> http://127.0.0.1:3000/user/getAll
