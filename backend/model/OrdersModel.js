// const { Schema } = require("mongoose");

// const OrdersSchema = new Schema({
//   name: String,
//   qty: Number,
//   price: Number,
//   mode: String,
// });

// module.exports = { OrdersSchema }; 

const { model } = require("mongoose"); 

const { OrdersSchema } = require("../schemas/OrdersSchema"); 

const OrdersModel = new model("order", OrdersSchema); 

module.exports = { OrdersModel };