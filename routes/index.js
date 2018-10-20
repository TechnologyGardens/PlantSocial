const routes = require('express').Router();
const plants = require('./plants');
const users = require('./users');
const auth=require('./auth');


routes.get('*', (req,resp,next)=>{
    resp.locals.currentUser = req.user || null;
    resp.locals.isAdmin = ((req.user)&&(req.user.isAdmin)) || null;
    next();
})

routes.use('/plants',plants);
routes.use('/users',users);
routes.use('/auth',auth);

routes.get('/', (req, resp) => {
         resp.render('index', {
          title:'Plants',
          version: '1.0' 
        });
    });

module.exports = routes;
