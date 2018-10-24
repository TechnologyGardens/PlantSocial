const router = require('express').Router();
const organisms = require('./organisms');
const users = require('./users');
const api = require('../../../controllers/api/v1/index');

router.get('/', api.getInfo);
router.use('/organisms', organisms);
router.use('/users', users);

module.exports = router;