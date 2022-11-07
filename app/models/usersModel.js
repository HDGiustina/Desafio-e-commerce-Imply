const connect = require("./connection");

const selectUserByEmail = async (email) =>{
    const client = await connect();

    const query = 'SELECT password FROM users WHERE email = $1;'
    const result = await client.query(query, [email]);

    client.release();
    return result.rows;
};

const selectUserByToken = async (token) => {
    const client = await connect();

    const query = 'SELECT user_id FROM users WHERE token = $1;'
    const result = await client.query(sql, [token]);

    client.release();
    return result.rows;
};

const insertUser = async (user) => {
    const client = await connect();

    const query = 'INSERT INTO users (email, fullname, password, cpf, gender, phone) VALUES ($1,$2,$3,$4,$5,$6);';
    const values = [user.email, user.fullname, user.password, user.cpf, user.gender, user.phone];
    const result = await client.query(query, values);

    client.release();
    return result;
};

module.exports = {
    selectUserByEmail,
    selectUserByToken,
    insertUser,
};