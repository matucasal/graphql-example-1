const orderModel = require('./orders.model');

module.exports = {
  Query: {
    orders: async () => {
      return await orderModel.getAllOrders();
    }
  }
}