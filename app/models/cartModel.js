const connect = require("./connection");

const selectCart = async (userID) => {
    const client = await connect();

    const query = 'SELECT c.product_id, description, quantity FROM cart c JOIN products p ON c.product_id = p.product_id WHERE c.user_id = $1;'
    const result = await client.query(query, [userID]);
    
    client.release();
    return result.rows;
};

const insertItemCart = async (userID, item) => {
    const client = await connect();

    const query = 'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1,$2,$3);';
    const values = [userID, item.product_id, item.quantity];
    const result = await client.query(query, values);
    
    client.release();
    return result.rowCount;
};

module.exports = {
    selectCart,
    insertItemCart,
};