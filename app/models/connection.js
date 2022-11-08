const connect = async () => {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    });

    // Testando a conexao
    const client = await pool.connect();
    console.log("PostgreSQL pool created.");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    // Salvando a conexao em uma variavel global para reutilizar
    global.connection = pool;
    return pool.connect();
};

module.exports = connect;