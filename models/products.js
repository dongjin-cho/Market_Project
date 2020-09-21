//create table

module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('products',
        {
            product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            category_id : { type: DataTypes.INTEGER },
            name : { type: DataTypes.STRING },
            qrlink : { type: DataTypes.STRING },
            imglink : { type: DataTypes.STRING },
            description : { type: DataTypes.TEXT },
            createdAt : { type: DataTypes.STRING },
            updatedAt : { type: DataTypes.STRING }
            
        }
    );
    return products;
}

//만들고 app.js의 db sync로 간다