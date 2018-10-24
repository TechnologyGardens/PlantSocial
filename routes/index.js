const routes = require('express').Router();
const organisms = require('./organisms');
const users = require('./users');
const auth=require('./auth');
const api=require('./api/v1');
const error404 = require('./404');
const error500 = require('./500');

routes.get('*', (req,resp,next)=>{
    resp.locals.currentUser = req.user || null;
    resp.locals.isAdmin = ((req.user)&&(req.user.isAdmin)) || null;
    next();
})

routes.use('/organisms',organisms);
routes.use('/users',users);
routes.use('/auth',auth);
routes.use('/api/v1',api);

routes.get('/', (req, resp) => {
         resp.render('index', {
          title:'PlantSocial',
          version: '1.0' 
        });
    });

routes.use(error404);
routes.use(error500);


module.exports = routes;
