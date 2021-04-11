const express = require("express");
const router = express.Router();

const { get_all_stocks, add_stock, delete_stock } = require("../controllers/stocks_controller");

router.get('/stocks/all',   get_all_stocks);
router.post('/stocks/add', add_stock);
router.delete('/removeStock/:id',  delete_stock);

module.exports = router;