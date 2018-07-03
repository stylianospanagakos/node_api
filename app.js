const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const Booking = require('./Booking');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(middleware.apiKeyCheck);

app.get("/status/", function(req, res) {
    res.status(200).send({
        status : process.env.NODE_API_STATUS || "OK"
    });
});

app.post("/save/", function(req, res) {
    Booking.save(req.body, function(response) {
        res.status(200).send({
            status : "OK"
        });
    });
});

var server = app.listen(port, function() {
    console.log("app running on port.", server.address().port);
});