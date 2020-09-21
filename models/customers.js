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
            createdate : { type: DataTypes.DATE }
        }
    );
    return customers;
}