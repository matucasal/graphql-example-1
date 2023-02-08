const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: async () => {
      return await productsModel.getAllProducts();
    }
  }

}