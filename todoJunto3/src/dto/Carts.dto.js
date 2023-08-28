class CartDTO {
    static getCartInputFrom = (cart) => {
        return {
            products: cart.products || []
        };
    };
}

module.exports = CartDTO;
