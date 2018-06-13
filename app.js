var express = require('express');
var bodyParser = require('body-parser');

var sendgrid = require('./sendgrid');
var sparkpost = require('./sparkpost');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.get("/status/", function(req, res) {
    res.status(200).send({
        status : "OK"
    });
});

var server = app.listen(port, function() {
    console.log("app running on port.", server.address().port);
});