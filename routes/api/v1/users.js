const router = require('express').Router();
const Users = require('../../../controllers/api/v1/users');
const admin = require('../isAdmin');


router.get('/',admin, Users.get);
router.get('/:id', admin,Users.findById);
router.post('/',admin,Users.post);
router.delete('/:id', admin,Users.delete);

module.exports = router;