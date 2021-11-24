module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define("cart", {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return cart;
};
