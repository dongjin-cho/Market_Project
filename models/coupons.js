
module.exports = (sequelize, DataTypes) => {
    const coupons = sequelize.define('coupons',
        {
            coupon_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            customer_id : { type: DataTypes.INTEGER },
            type : { type: DataTypes.INTEGER },
            value : { type: DataTypes.FLOAT },
            expire_date : { type: DataTypes.DATE},
        },
        
    );

    coupons.associate = function (db){
        coupons.belongsTo(db.customers, 
            {foreignKey: 'customer_id', sourceKey:'customer_id'})
        
    };
    

    return coupons;
}