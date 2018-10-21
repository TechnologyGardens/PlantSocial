const router = require('express').Router();
const auth = require('../checkAuth');
const find = require('./find');
const add = require('./add');
const post = require('./post');
const single = require('./single');
const edit = require('./edit');
const update = require('./update');
const remove = require('./remove');


router.get('/', find);
router.get('/add',auth, add);
router.post('/add',auth, post);
router.get('/:id', single);
router.delete('/:id',auth, remove);
router.get('/edit/:id', auth, edit);
router.post('/edit/:id', auth, update);

module.exports = router;