var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var send = function(options, callback) {

    var from = 'Heroku App';
    var to = 'panagakos.stylianos87+taxicodeApps@gmail.com';
    var subject = `New ${options.platform} Booking - ${options.reference}`;
    var content = new helper.Content('text/plain', `
        API KEY : ${options.api_key}
        ----------------------------
        PRICE : ${options.price}
        QUOTE DETAILS : ${options.quote}
    `);

    var mail = new helper.Mail(from, subject, to, content);

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        callback(error, response);
    });
};

module.exports = send;