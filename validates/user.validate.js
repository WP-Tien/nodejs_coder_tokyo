module.exports.create = function( request, response, next ) {
    var error = [];

    if( !request.body.name ) {
        error.push('Name is required');
    }

    if( !request.body.phone ) {
        error.push('Phone is required');
    }

    if( error.length ) { // falsy truthy
        response.render('users/create', {
            errors: error,
            values: request.body
        });
        return
    }

    response.locals.success = true;

    next();
} 