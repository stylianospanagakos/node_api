var SparkPost = require('sparkpost');
var sparky = new SparkPost(); // uses process.env.SPARKPOST_API_KEY

module.exports = {

    send : function(options, callback) {

        sparky.transmissions.send({
            options: {
                sandbox: false
            },
            content: {
            from: 'stylianos@web3r.co.uk', // 'testing@sparkpostbox.com'
            subject: `New ${options.platform} Booking - ${options.reference}`,
            html: `<html><body><p>
                API KEY : ${options.api_key}
                ----------------------------
                PRICE : ${options.price}
                QUOTE DETAILS : ${options.quote}
            </p></body></html>`
            },
            recipients: [
                {address: 'panagakos.stylianos87+sparkpost@gmail.com'}
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