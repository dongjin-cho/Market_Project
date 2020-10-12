module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define('customers',
        {
            customer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.CHAR },
            password : { type: DataTypes.CHAR },
            email : { type: DataTypes.CHAR },
            birthdate : { type: DataTypes.DATE },
            phone : { type: DataTypes.CHAR },
            address : { type: DataTypes.CHAR },
            createdate : { type: DataTypes.DATE },
        },
    );    
    customers.associate = function (db){
        customers.hasMany(db.carts,
            {foreignKey: 'customer_id', sourceKey:'customer_id'});
        customers.hasMany(db.purchases,
            {foreignKey: 'customer_id', sourceKey:'customer_id'});
    }
    
    return customers;
    
}