const router = require('express').Router();
const admin = require('../isAdmin');
const auth = require('../isAuthenticated');

const all = require('./all');
const register = require('./register');
const post = require('./post');
const view = require('./view');
const edit = require('./edit');
const update = require('./update');
const remove = require('./remove');

router.get('/',admin, all);
router.get('/register', register);
router.post('/register', post);
router.get('/:id',auth, view);
router.delete('/:id',auth, remove);
router.get('/edit/:id',auth,  edit);
router.put('/update/:id',auth, update);


module.exports = router;