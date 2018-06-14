const mongodb = require('mongodb');


module.exports = {
    
    save : function(booking, callback) {

        let uri = process.env.MONGODB_URI;

        mongodb.MongoClient.connect(uri, function(err, client) {
        
            if(err) {
                callback({ status : 'ERROR' });
                return;
            };

            /*
            * Get the database from the client. Nothing is required to create a
            * new database, it is created automatically when we insert.
            */

            let db = client.db('heroku_0vlspg5k');

            /*
            * First we'll add the booking. Nothing is required to create the
            * bookings collection; it is created automatically when we insert.
            */

            let bookings = db.collection('bookings');

            bookings.insert(booking, function(err, result) {

                if(err) {
                    callback({ status : 'ERROR' });
                    return;
                };

                // Only close the connection when your app is terminating.
                client.close(function (err) {
                    if(err) {
                        callback({ status : 'ERROR' });
                    } else {
                        callback({ status : 'OK' });
                    };
                });

            });

        });

    }

};