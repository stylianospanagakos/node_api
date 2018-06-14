module.exports = {

    apiKeyCheck : function(req, res, next) {
        
        const key = req.body.key || req.query.key;

        if (typeof key === 'undefined' || key !== process.env.NODE_API_KEY) {
            res.status(401).end();
        } else {
            next();
        }

    }

}