module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
    },
    images: {
      type: DataTypes.JSON,
    },
  });

  return product;
};
