import express from 'express'
const productsRouter = require("./routes/products.router").default;
const cartRouter = require("./routes/cart.router").default.default;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
});