const selectProducts = async () => {
    const client = await connect();
    const res = await client.query('SELECT * FROM products');
    return res.rows;
};

module.exports = {
    selectProducts,
};