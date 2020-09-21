module.exports = (sequelize, DataTypes) => {
    const orders = sequelize.define('orders',
        {
            order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            customer_id : { type: DataTypes.INTEGER },
            totalprice : { type: DataTypes.INTEGER },
            status : { type: DataTypes.CHAR }
        }
    );
    return orders;
}