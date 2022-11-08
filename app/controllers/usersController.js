const usersModel = require("../models/usersModel");

const authenticate = async (req, res) => {
    let user = req.body;
    let ret = await usersModel.selectUserByEmail(user.email);

    if(ret.length == 0) {
        return res.status(401).json({error: 1, message: 'E-mail não cadastrado.'});
    }
    if(user.password != ret[0].password) {
        return res.status(401).json({error: 2, message: 'Senha inválida.'});
    }
    return res.status(201).json({error: 0, token: 'akhjsfblashf1673572635276', user: ret[0].user_id});
};

const getUserProfile = async (req, res) => {
    const userId = req.params.id;
    
    const ret = await usersModel.selectUserProfile(userId);
    if(ret.length == 0)
        return res.status(401).json({error: 1, message: 'Usuário não cadastrado.'});

    return res.status(201).json({error: 0, user: ret});
};

const insert = async (req, res) => {
    console.log(req.body);
    const user = req.body;

    const ret = await usersModel.insertUser(user);
    return res.status(201).json({error: 0});
};

const updateUser = async (req, res) => {
    const user = req.body;
    const userId = req.params.id;
    const ret = await usersModel.updateUser(userId, user);
    return res.status(201).json({error: 0, message: 'Usuário atualizado.'});
};

module.exports = {
    authenticate,
    getUserProfile,
    insert,
    updateUser,
};