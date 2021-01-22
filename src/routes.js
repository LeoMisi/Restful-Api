const productHandler = require("./handles/products");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/products",
    handler: productHandler.getAll,
  },
  {
    method: "POST",
    path: "/api/v1/products",
    handler: productHandler.save,
  },
];
