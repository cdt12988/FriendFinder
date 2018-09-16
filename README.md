# Find a Friend

Link: [https://floating-journey-91870.herokuapp.com/](https://floating-journey-91870.herokuapp.com/)

Find a Friend is a web-based application designed to match users with like-minded individuals based upon their answers to a short questionnaire.  The app uses Express.js with middleware to handle client-side AJAX requests, routing responses appropriately.

![Screenshot](https://cdt12988.github.io/images/portfolio/faf.jpg "Find a Friend Screenshot")

## Front-End

### RESTful AJAX Requests

The application takes in user input, via a survey form, validates it, and then constructs a JSON object that is sent to the server for processing.  It then receives the server response and changes the front-end displays accordingly.

### Client-Side API

Users have access to the application's data via a client-side API which returns back all current "friends" data in JSON format.

## Back-End

### Express Server

Find a Friend uses a RESTful API built with the Express Node.js framework.  The server uses a modular approach to handle all HTTP requests, routing all responses back to the client appropriately.  Server-side routing includes both HTML routes, responding with HTML files, as well as API routing that responds with JSON.

## Developer's Toolkit

### Languages

HTML5, CSS3, JavaScript, Node.js

### Frameworkds and Libraries

jQuery, Express.js, Body-Parser Middleware

### Contributors

Cody Thompson is the only contributor.