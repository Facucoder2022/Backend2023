const productModel = require("../../dao/model/product.model");
const connection = require("../../db");
require("dotenv").config();

async function filtro(
  category,
  jersey_size,
  short_size,
  shoes_size,
  equipment_size,
  price,
) {
  connection();
  try {
    let all = await productModel.find({ deleted: false }).populate({
      path: "products",
      match: { deleted: false },
    });

    if (category === "Jersey") {
      all = all.filter((ev) => ev.category === "Jersey");
    }
    if (category === "Shorts") {
      all = all.filter((ev) => ev.category === "Shorts");
    }
    if (category === "Shoes") {
      all = all.filter((ev) => ev.category === "Shoes");
    }
    if (category === "Equipment") {
        all = all.filter((ev) => ev.category === "Equipment");
      }
    if (jersey_size === "XXL") {
      all = all.filter((ev) => ev.jersey_size === "XXL");
    }
    if (jersey_size === "XL") {
        all = all.filter((ev) => ev.jersey_size === "XL");
    }
    if (jersey_size === "L") {
        all = all.filter((ev) => ev.jersey_size === "L");
    }
    if (jersey_size === "M") {
        all = all.filter((ev) => ev.jersey_size === "M");
    }
    if (short_size === "XXL") {
        all = all.filter((ev) => ev.short_size === "XXL");
    }
    if (short_size === "XL") {
        all = all.filter((ev) => ev.short_size === "XL");
    }
    if (short_size === "L") {
        all = all.filter((ev) => ev.short_size === "L");
    }
    if (short_size === "M") {
        all = all.filter((ev) => ev.short_size === "M");
    }
    if (shoes_size === "adult man") {
        all = all.filter((ev) => ev.shoes_size > 9 );
    }
    if (shoes_size === "adult women") {
        all = all.filter((ev) => ev.shoes_size > 7 && ev.shoes_size < 10);
    }
    if (shoes_size === "kids") {
        all = all.filter((ev) => ev.shoes_size < 8);
    }
    if (equipment_size === "XXL") {
        all = all.filter((ev) => ev.equipment_size === "XXL");
    }
    if (equipment_size === "XL") {
        all = all.filter((ev) => ev.equipment_size === "XL");
    }
    if (equipment_size === "L") {
        all = all.filter((ev) => ev.equipment_size === "L");
    }
    if (equipment_size === "M") {
        all = all.filter((ev) => ev.equipment_size === "M");
    }
    if (price === "high") {
        all = all.filter((ev) => ev.price > 3000 );
    }
    if (price === "medium") {
        all = all.filter((ev) => ev.price > 1500 && ev.price < 3000 );
    }
    if (price === "low") {
        all = all.filter((ev) => ev.price < 1500 );
    }
    return all;
  } catch (error) {
    console.error(error);
  }
}
module.exports = { filtro };