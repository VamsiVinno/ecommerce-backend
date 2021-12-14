const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

//-----------------ALL PRODUCTS--------------------------------------//

//http://192.168.0.12:3005/api/allProducts/men/shirts
router.get("/allProducts", (req, res) => {
  db.product.findAll().then((data) => res.status(200).send(data));
});

//------------------------BRAND---------------------------------//
router.get("/brand", (req, res) => {
  db.product
    .findAll({ attributes: ["brand", "gender"] })
    .then((data) => res.status(200).send(data));
});

//----------------------------------PRICE------------------------------//
router.get("/product/:range", (req, res) => {
  let dataRange;
  let product =[];
  db.product.findAll().then((data) => {
    switch (req.params.range) {
      case "0-500":
        {
          dataRange = data.map((products) => {
            if (products.price <= 500) {
              product.push(products);
            }
          });
        }
        break;
      case "500-1000":
        {
          dataRange = data.map((products) => {
            if (products.price > 500 && products.price <= 1000) {
              product.push(products);
            }
          });
        }
        break;
      case "1000-2000":
        {
          dataRange = data.map((products) => {
            if (products.price > 1000 && products.price <= 2000) {
              product.push(products);
            }
          });
        }
        break;
      case "2000-5000":
        {
          dataRange = data.map((products) => {
            if (products.price > 2000 && products.price <= 5000) {
              product.push(products);
            }
          });
        }
        break;
      case '5000+': {
        dataRange = data.map((products) => {
          if (products.price > 5000) {
            product.push(products);
          }
        });
      }
    }

    res.status(200).send(product);
  });
});

//---------------------------------------------MEN SECTION--------------------------------------------------//

//http://192.168.0.12:3005/api/men
router.get("/men", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "men",
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men/
router.get("/men/:shirt", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "men",
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-jeans/{brand}
router.get("/men/:sub/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        gender: "men",
        product_name: {
          [Op.substring]: req.params.sub,
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-jeans
router.get("/men-jeans", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "men",
        product_name: {
          [Op.substring]: "jeans",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-shirt/{brand}
router.get("/men-shirt/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        gender: "men",
        product_name: {
          [Op.substring]: "shirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-shirt
router.get("/men-shirt", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "men",

        product_name: {
          [Op.regexp]: "shirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-tshirt/{brand}
router.get("/men-tshirt/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        gender: "men",

        product_name: {
          [Op.substring]: "T-shirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-tshirt
router.get("/men-tshirt", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "men",

        product_name: {
          [Op.substring]: "T-shirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-sweatshirt/{brand}
router.get("/men-sweatshirt/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        gender: "men",

        product_name: {
          [Op.substring]: "sweatshirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/men-sweatshirt
router.get("/men-sweatshirt", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "men",

        product_name: {
          [Op.substring]: "sweatshirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//---------------------------------------------WOMEN SECTION--------------------------------------------------//

//http://192.168.0.12:3005/api/women
router.get("/women", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "women",
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-jeans/{brand}
router.get("/women-jeans/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        gender: "women",

        product_name: {
          [Op.substring]: "jeans",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-jeans
router.get("/women-jeans", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "women",
        product_name: {
          [Op.substring]: "jeans",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-kurta/{brand}
router.get("/women-kurta/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        product_name: {
          [Op.substring]: "kurta",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-kurta
router.get("/women-kurta", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "kurta",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-saree
router.get("/women-saree", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "saree",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-saree/{brand}
router.get("/women-saree/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        product_name: {
          [Op.substring]: "saree",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-sweatshirt/{brand}
router.get("/women-sweatshirt/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        brand: req.params.brand,
        gender: "women",
        product_name: {
          [Op.substring]: "sweatshirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/women-sweatshirt
router.get("/women-sweatshirt", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "women",
        product_name: {
          [Op.substring]: "sweatshirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//-----------------------------------------------------------------KIDS--------------------------------------------------------------------------//

  //http://192.168.0.12:3005/api/kids
router.get("/kids", (req, res) => {
  db.product
    .findAll({
      where: {
        gender: "kids",
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/boys
router.get("/kids/boys", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "boys",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/girls
router.get("/kids/girls", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "girls",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/jeans
router.get("/kids-jeans", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "boys",
          [Op.regexp]: "jeans",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/jeans/{brand}
router.get("/kids-jeans/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "boys",
          [Op.regexp]: "jeans",
        },
        brand: req.params.brand,
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/tshirt
router.get("/kids-tshirt", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "boys",
          [Op.regexp]: "T-shirt",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/tshirt/{brand}
router.get("/kids-tshirt/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.substring]: "boys",
          [Op.regexp]: "tshirt",
        },
        brand: req.params.brand,
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/top
router.get("/kids-top", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.regexp]: "top",
        },
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/kids/top/{brand}
router.get("/kids-top/:brand", (req, res) => {
  db.product
    .findAll({
      where: {
        product_name: {
          [Op.regexp]: "top",
        },
        brand: req.params.brand,
      },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//-----------------------------------------------------------------CART--------------------------------------------------------------------------//
//http://192.168.0.12:3005/api/cart
router.get("/cart", (req, res) => {
  db.cart
    .findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/addToCart
router.post("/addToCart", (req, res) => {
  db.cart
    .findAll()
    .then((data) => {
      let contains = false;
      res.status(200).send(data);
      data.map((product) => {
        if (product.product_id == req.body.productId) {
          contains = true;
          db.cart
            .increment("product_count", {
              where: { product_id: req.body.productId },
            })
            .then((data) => res.status(200).send("updated"))
            .catch((err) => res.send(err));
        }
      });
      if (!contains) {
        db.cart
          .create({
            product_id: req.body.productId,
            product_count: req.body.productCount,
          })
          .then(() => res.status(200).send("Successfully added"))
          .catch((err) => res.send(err));
      }
    })
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/updateCart
router.put("/productCountUp", (req, res) => {
  db.cart
    .increment("product_count", {
      where: { product_id: req.body.productId },
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});
//http://192.168.0.12:3005/api/updateCart
router.put("/productCountDown", (req, res) => {
  db.cart
    .decrement("product_count", {
      where: { product_id: req.body.productId },
    })
    .then(() => res.status(200).send("success"))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/dropFromCart
router.delete("/dropFromCart/:productId", (req, res) => {
  db.cart
    .destroy({
      where: {
        product_id: req.params.productId,
      },
    })
    .then(() => res.status(200).send("Successfully Removed"))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/emptyCart
router.delete("/emptyCart", (req, res) => {
  db.cart
    .destroy({
      where: {},
      truncate: true,
    })
    .then(() => res.status(200).send("Cart is Empty"))
    .catch((err) => res.send(err));
});

//-----------------------------------------------------------------Orders--------------------------------------------------------------------------//

//http://192.168.0.12:3005/api/placeOrder
router.post("/placeOrder", (req, res) => {
  db.order
    .create({
      product_id: req.body.productId,
      product_count: req.body.productCount,
      order_status: req.body.orderStatus,
      order_date: req.body.orderDate,
      delivery_date: req.body.deliveryDate,
      address: req.body.address,
      phone: req.body.phone,
    })
    .then(() => res.status(200).send("Order Successful"))
    .catch((err) => res.send(err));
});

router.post("/placeCartOrder", (req, res) => {
  req.body.map((product) => {
    db.order.create({
      product_id: product.productId,
      product_count: product.productCount,
      order_status: product.orderStatus,
      order_date: product.orderDate,
      delivery_date: product.deliveryDate,
      address: product.address,
      phone: product.phone,
    });
  });
  res.status(200).send("Order Successful");
});

//http://192.168.0.12:3005/api/allOrders
router.get("/allOrders", (req, res) => {
  db.order
    .findAll()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/updateOrder
router.put("/updateOrder", (req, res) => {
  db.order
    .update(
      {
        order_status: req.body.orderStatus,
        delivery_date: req.body.deliveryDate,
      },
      {
        where: {
          product_id: req.body.productId,
        },
      }
    )
    .then(() => res.status(200).send("Successfully Updated"))
    .catch((err) => res.send(err));
});

//http://192.168.0.12:3005/api/orders/{id}
router.get("/orders/:id", (req, res) => {
  db.order
    .findAll({
      where: {
        product_id: req.params.id,
      },
    })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

module.exports = router;
