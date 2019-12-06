const db        = require('../db');
const shortid = require('shortid');

module.exports.index = function( request, response ) {
    // response.send('<h1> User list </h1>');
    response.render( 'users/index', {       
        users: db.get('users').value()
    });
};

module.exports.search = function( request, response ) {
    var query = request.query.q;
    var matchedUsers = db.get('users').value().filter( function(user)  {
        return db.get('users').value().name.toLowerCase().indexOf(query.toLowerCase()) !== -1; // indexOf trả về -1 khi ko tìm thấy
    });

    response.render( 'users/index', { users: matchedUsers } );
};

module.exports.create = function( request, response )  {
    console.log( request.cookies );

    response.render( 'users/create' );
};

module.exports.userGet = function( request, response ) {
    var id = request.params.id;

    var user = db.get('users').find({ id: id }).value();

    response.render('users/view', {
        user: user
    }) 
};

module.exports.userPost = function( request, response ) {
    request.body.id = shortid.generate();

    console.log( response.locals );

    db.get('users').push( request.body ).write();
    response.redirect('/users');
};