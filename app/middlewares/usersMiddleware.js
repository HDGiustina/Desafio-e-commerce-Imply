const validateBodyLogin = (req, res, next) => {
    const user = req.body;

    if(user.email === undefined) {
        return res.status(400).json({ message: 'O campo "email" é necessário para o login.'});
    }

    if(user.password === undefined) {
        return res.status(400).json({ message: 'O campo "senha" é necessário para o login.'});
    }

    if(user.email == '') {
        return res.status(400).json({ message: 'O campo "email" não pode estar branco.'});
    }

    if(user.password == '') {
        return res.status(400).json({ message: 'O campo "senha" não pode estar em branco.'});
    }
    next();
};

module.exports = {
    validateBodyLogin,
}