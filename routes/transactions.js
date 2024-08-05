const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

//Definir a rota para obter todas as transações
router.get('/', transactionsController.allTransactions);
router.post('/', transactionsController.addTransaction);
router.put('/:id', transactionsController.attTransactionTotal);
router.patch('/:id', transactionsController.attTransactionParcial);
router.delete('/:id', transactionsController.delTransaction);

//Exportar o roteador
module.exports = router;