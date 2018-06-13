var SparkPost = require('sparkpost');
var sparky = new SparkPost(); // uses process.env.SPARKPOST_API_KEY

module.exports = {

    send : function(options, callback) {

        sparky.transmissions.send({
            options: {
                sandbox: true
            },
            content: {
            from: 'testing@' + process.env.SPARKPOST_SANDBOX_DOMAIN, // 'testing@sparkpostbox.com'
            subject: 'Oh hey!',
            html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
            },
            recipients: [
                {address: 'developers+nodejs@sparkpost.com'}
            ]
        })
        .then(data => {
            callback({ status : 'OK', data });
            console.log('Woohoo! You just sent your first mailing!');
            console.log(data);
        })
        .catch(err => {
            callback({ status : 'ERROR', error : err });
            console.log('Whoops! Something went wrong');
            console.log(err);
        });

    }

}