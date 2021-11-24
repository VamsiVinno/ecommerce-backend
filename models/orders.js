module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_count: {
      type: DataTypes.INTEGER,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
  });
  return order;
};
