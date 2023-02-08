const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: async () => {
      return await productsModel.getAllProducts();
    },
    productsByPrice: (_, args) =>{
      return productsModel.getProductsByPrice(args.min, args.max);
    }
  }

};