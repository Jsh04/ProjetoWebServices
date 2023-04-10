const {Router} = require('express');
const autorController = require('../controllers/AutorController.js');

const router = Router();

router.get('/autor', autorController.listarAutores);
router.post('/autor', autorController.criarAutor);

module.exports = router;