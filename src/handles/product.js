const ProductModel = require("../models/product");

const transformer = (product) => ({
  type: "products",
  id: product.id,
  attributes: {
    name: product.name,
    price: product.price,
  },
  links: {
    self: `/api/v1/produts/${product.id}`,
  },
});

const getAll = async () => {
  const products = await ProductModel.find({});
  return { data: products.map(transformer) };
};

const find = async (req) => {
  const product = await ProductModel.findById(req.params.id);
  return { data: transformer(product) };
};

const save = async (req, h) => {
  const { name, price } = req.payload;

  const product = new ProductModel();
  product.name = name;
  product.price = price;

  await product.save();

  return h.response(transformer(product)).code(201);
};

const update = async (req, h) => {
  const { name, price } = req.payload;
  const product = ProductModel.findByIdAndUpdate(
    { _id: req.params.id },
    { name, price }
  );
  await product.updateOne();
  // console.log(name, price);

  return h.response(transformer(product)).code(201);
};

const remove = async (req, h) => {
  await ProductModel.findOneAndDelete({ _id: req.params.id });
  return h.response().code(204);
};

module.exports = {
  getAll,
  save,
  remove,
  find,
  update,
};
