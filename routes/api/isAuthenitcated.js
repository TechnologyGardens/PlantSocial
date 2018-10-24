module.exports = function isAuthenticated(req, resp, next){
    if (req.isAuthenticated())
        return next();
    else {
            resp.status(403).send({
                code:403,
                type:"Access forbidden",
                message:`You are not authenticated and can not access the reqyested resoutce`,
                documentation:"http://localhost:3000/api-docs"
          });
    }
}