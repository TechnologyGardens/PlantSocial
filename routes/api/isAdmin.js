module.exports = function isAdmin(req, resp, next){
    if (req.isAuthenticated() && req.user.isAdmin)
        return next();
    else {
        resp.status(403).send({
              code:403,
              type:"Access forbidden",
              message:`You are currently ${(req.user)?'authenticated as '+username+' which does not have administrative priviledges to access the requested resource.':'not authenticated'}`,
              documentation:"http://localhost:3000/api-docs"
        });
    }
}