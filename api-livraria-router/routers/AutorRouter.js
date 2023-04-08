const {Router} = require('express');
const autorController = require('../controllers/AutorController.js');

const router = Router();

router.get('/autor', autorController.listarAutor);

module.exports = router;