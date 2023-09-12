const { Schema, model } = require("mongoose");
const {ProductSchema}  = require("./Products");

const collection = "carts";

const cartSchema = new Schema(
    {
      email: { type: String, require: true },
      products: { type: [ProductSchema], require: true },
      delivery_address: { type: String, require: true },
      total: { type: Number, default: 0 },
    },
    {
      timestamps: true,
    }
  );

const cartModel = model(collection, cartSchema);

module.exports = {
    cartModel
};
