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

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("PostgreSQL pool created.");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
};

module.exports = connect;