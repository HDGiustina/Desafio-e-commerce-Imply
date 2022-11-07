const connect = require("./connection");

const selectUserProfile = async (userID) =>{
    const client = await connect();

    const query = 'SELECT user_id, email, fullname, cpf, gender, phone FROM users WHERE user_id = $1;'
    const result = await client.query(query, [userID]);

    client.release();
    return result.rows;
};

const selectUserByEmail = async (email) =>{
    const client = await connect();

    const query = 'SELECT password, user_id FROM users WHERE email = $1;'
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

const updateUser = async (userId, user) => {
    const client = await connect();

    const query = 'UPDATE users SET fullname = $1, password = $2, gender = $3, phone = $4 WHERE user_id = $5;';
    const values = [user.fullname, user.password, user.gender, user.phone, userId];
    const result = await client.query(query, values);

    client.release();
    return result;
};


module.exports = {
    selectUserProfile,
    selectUserByEmail,
    selectUserByToken,
    insertUser,
    updateUser,
};