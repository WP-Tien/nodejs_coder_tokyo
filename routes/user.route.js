const express = require('express');
const router    = express.Router();

const controller    = require('../controllers/user.controller');
const validate  = require('../validates/user.validate');

// CRUD = Create Retrieve Update Delete 
// function middleware1(req, res, next) {
//     console.log("middleware1");
//     next();
// }

// function middleware2(req, res, mext) {
//     console.log("middleware2");
//     res.send('Hello');
// }

// router.get('/middleware', middleware1, middleware2);

router.get( '/', controller.index );

// router.get( '/cookie', function( request, response, next ) {
//     response.cookie('user-id', 12345);
//     response.send('Hello');
// });

router.get( '/create', controller.create );

router.get( '/:id', controller.userGet );

router.post( '/create', validate.create, controller.userPost ); 

router.get( '/search', controller.search );

module.exports = router;