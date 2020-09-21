//create table

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
    );
    return Products;
} 

//만들고 app.js의 db sync로 간다