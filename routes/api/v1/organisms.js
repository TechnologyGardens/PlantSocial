const router = require('express').Router();
const Organisms = require('../../../controllers/api/v1/organisms');
const auth = require('../isAuthenitcated');


router.get('/',  Organisms.get);
router.put('/', auth, Organisms.put);

router.get('/:id',  Organisms.findById);
router.post('/:id', auth, Organisms.post);
router.delete('/:id', auth, Organisms.delete);

module.exports = router;