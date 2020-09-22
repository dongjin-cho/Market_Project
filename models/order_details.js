module.exports = (sequelize, DataTypes) => {
    const order_details = sequelize.define('order_details',
        {
            order_detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            order_id : { type: DataTypes.INTEGER },
            product_id : { type: DataTypes.INTEGER },
            quantity : { type: DataTypes.INTEGER }
        }
    );
    return order_details;
}