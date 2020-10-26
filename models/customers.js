module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define('customers',
        {
            customer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            sns_id : { type: DataTypes.CHAR, allowNull: false },
            name : { type: DataTypes.CHAR, allowNull: false },
            password : { type: DataTypes.CHAR },
            email : { type: DataTypes.CHAR, allowNull: false },
            birthdate : { type: DataTypes.CHAR, allowNull: false },
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