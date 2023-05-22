const { Router } = require("express");
const productRouter = require("./products.router");
const cartRouter = require("./cart.router");


const router = Router();

router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);

module.exports = router;