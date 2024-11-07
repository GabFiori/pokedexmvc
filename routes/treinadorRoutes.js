const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/', treinadorController.getAllTreinadores);
router.post('/', treinadorController.createTreinador);
router.get('/:id', treinadorController.getTreinador);
router.post('/:id/edit', treinadorController.editTreinador);

module.exports = router;