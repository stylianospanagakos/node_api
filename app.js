var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.get("/status/", function(req, res) {
    res.status(200).send({
        status : "OK"
    });
});

app.post("/booking/", function(req, res) {
    res.status(200).send(req.body);
});

var server = app.listen(port, function() {
    console.log("app running on port.", server.address().port);
});