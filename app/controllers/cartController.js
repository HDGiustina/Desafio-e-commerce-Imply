const cartModel = require("../models/cartModel");

const getCart = async (req, res) => {
    let userId = req.params.id;
    let ret = await cartModel.selectCart(userId);
    if(ret.length == 0) ret = "O carrinho está vazio";
    return res.status(201).json({error: 0, cart: ret});
};

const setCart = async (req, res) => {
    let userId = req.body.id;
    let cart = req.body.cart;

    cart.forEach(async item => {
        await cartModel.insertItemCart(userId, item);
    });
    return res.status(201).json({error: 0});
};

module.exports = {
    getCart,
    setCart,
};