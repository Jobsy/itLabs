const express = require('express');
const router = express.Router();
const tradesController = require('../controllers/trades');

router.post('/', tradesController.createTrade);
router.get('/', tradesController.getAllTrades);
router.get('/:id', tradesController.getTradeById);
router.put('/:id', tradesController.putTradeById);
router.patch('/:id', tradesController.patchTradeById);
router.delete('/:id', tradesController.deleteTradeById);


module.exports = router;
