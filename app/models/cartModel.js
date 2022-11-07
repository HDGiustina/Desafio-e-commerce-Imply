const selectCart = async (userID) => {
    const client = await connect();
    const sql = 'SELECT c.product_id, description, quantity FROM cart c JOIN products p ON c.product_id = p.product_id WHERE c.user_id = $1;'
    const ret = await client.query(sql, [userID]);
    return ret.rows;
};

const insertItemCart = async (userID, item) => {
    const client = await connect();
    const sql = 'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1,$2,$3);';
    const values = [userID, item.product_id, item.quantity];
    return await client.query(sql, values);
};

module.exports = {
    selectCart,
    insertItemCart,
};