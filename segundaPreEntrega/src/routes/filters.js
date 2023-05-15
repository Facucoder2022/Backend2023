const { Router } = require("express");
const { filtro } = require("../utils/controllers/filters");
require("dotenv").config();
const router = Router();

router.get("/filters", async (req, res, next) => {
  let {
    category,
    jersey_size,
    short_size,
    shoes_size,
    equipment_size,
    price
  } = req.query;
  try {
    const filter = await filtro(
        category,
        jersey_size,
        short_size,
        shoes_size,
        equipment_size,
        price
    );
    res.status(200).send(filter);
  } catch (err) {
    next(err);
  }
});

module.exports = router;