const productHandler = require("./handles/product");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/product",
    handler: productHandler.getAll,
  },
  {
    method: "GET",
    path: "/api/v1/product/{id}",
    handler: productHandler.find,
  },
  {
    method: "POST",
    path: "/api/v1/product",
    handler: productHandler.save,
  },
  {
    method: "PUT",
    path: "/api/v1/product/{id}",
    handler: productHandler.update,
  },
  {
    method: "DELETE",
    path: "/api/v1/product/{id}",
    handler: productHandler.remove,
  },
];
