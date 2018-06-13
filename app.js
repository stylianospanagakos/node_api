var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.get("/status/", function(req, res) {
    res.status(200).send({
        status : "OK"
    });
});

var server = app.listen(3000, function() {
    console.log("app running on port.", server.address().port);
});