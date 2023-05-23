const { Router } = require("express");
const productRouter = require("./products.router");
const cartRouter = require("./cart.router");
const filtersRouter = require("./filters");



const router = Router();

router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);
router.use("/api/filters", filtersRouter);


module.exports = router;