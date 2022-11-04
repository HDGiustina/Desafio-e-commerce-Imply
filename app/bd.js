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

async function selectProducts() {
    const client = await connect();
    const res = await client.query('SELECT * FROM products');
    return res.rows;
} module.exports = { selectProducts }

async function selectUserByEmail(email) {
    const client = await connect();
    const sql = 'SELECT password FROM users WHERE email = $1;'
    const res = await client.query(sql, [email]);
    return res.rows;
} module.exports = { selectUserByEmail }

async function selectUserByToken(token) {
    const client = await connect();
    const sql = 'SELECT user_id FROM users WHERE token = $1;'
    const res = await client.query(sql, [token]);
    return res.rows;
} module.exports = { selectUserByEmail }

/*
async function selectCart() {
    const client = await connect();
    const sql = ''
    const res = await client.query();
    return res.rows;
} module.exports = {  }
*/


async function insertUser(user) {
    const client = await connect();
    const sql = 'INSERT INTO users (email, fullname, password, cpf, gender, phone) VALUES ($1,$2,$3,$4,$5,$6);';
    const values = [user.email, user.fullname, user.password, user.cpf, user.gender, user.phone];
    return await client.query(sql, values);
} module.exports = { insertUser }