async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://kwiixhtt:1OyNtzNS8phhbfUflw4u8V-WF9yXsdQJ@peanut.db.elephantsql.com/kwiixhtt'
    });

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

// USERS

async function insertUser(user) {
    const client = await connect();
    const sql = 'INSERT INTO users (email, fullname, password, cpf, gender, phone) VALUES ($1,$2,$3,$4,$5,$6);';
    const values = [user.email, user.fullname, user.password, user.cpf, user.gender, user.phone];
    return await client.query(sql, values);
} 

async function selectUserByEmail(email) {
    const client = await connect();
    const sql = 'SELECT password FROM users WHERE email = $1;'
    const res = await client.query(sql, [email]);
    return res.rows;
}

async function selectUserByToken(token) {
    const client = await connect();
    const sql = 'SELECT user_id FROM users WHERE token = $1;'
    const res = await client.query(sql, [token]);
    return res.rows;
}

// PRODUCTS

async function selectProducts() {
    const client = await connect();
    const res = await client.query('SELECT * FROM products');
    return res.rows;
}

// CART

async function selectCart(userID) {
    const client = await connect();
    const sql = 'SELECT c.product_id, description, quantity FROM cart c JOIN products p ON c.product_id = p.product_id WHERE c.user_id = $1;'
    const ret = await client.query(sql, [userID]);
    return ret.rows;
}

async function insertItemCart(userID, item) {
    const client = await connect();
    const sql = 'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1,$2,$3);';
    const values = [userID, item.product_id, item.quantity];
    return await client.query(sql, values);
}


module.exports = {
    insertUser,
    selectUserByEmail,
    selectUserByToken,
    selectProducts,
    selectCart,
    insertItemCart,
};