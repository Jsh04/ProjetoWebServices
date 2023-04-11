const { Router } = require('express');
const livrosController = require('../controllers/LivrosController');

const router = Router()

router.get('/livros', livrosController.listarLivros);
router.post('/livros', livrosController.criarLivro);

module.exports = router;

