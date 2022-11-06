import express from 'express';
import * as bd from './bd.js';

const routes = express.Router();

// Rota de login
routes.post("/login", async (req, res) => {
    let user = req.body;
    let ret = await bd.selectUserByEmail(user.email);
    if(ret.length == 0) {
        return res.status(401).json({error: 1, message: 'E-mail não cadastrado.'});
    }
    if(user.password != ret[0].password) {
        return res.status(401).json({error: 2, message: 'Senha inválida.'});
    }

    return res.status(201).json({error: 0, token: 'akhjsfblashf1673572635276'});
});

// Rota de cadastro de usuários
routes.post("/cadastro", async (req, res) => {
    let user = req.body;
    await bd.insertUser(user);
    return res.status(201).json({error: 0});
});

// Rota de recuperar o carrinho
routes.post("/getcarrinho", async (req, res) => {
    let userId = req.body.id;
    let ret = await bd.selectCart(userId);
    if(ret.length == 0) ret = "O carrinho está vazio";
    return res.status(201).json({error: 0, cart: ret});
});

// Rota de recuperar o carrinho
routes.post("/setcarrinho", async (req, res) => {
    let userId = req.body.id;
    let cart = req.body.cart;

    cart.forEach(async item => {
        await bd.insertItemCart(userId, item);
    });
    return res.status(201).json({error: 0});
});

export default routes;