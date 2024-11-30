const mongoose = require('mongoose');

// Define the schema for Item
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Item model
module.exports = mongoose.model('Item', ItemSchema);
