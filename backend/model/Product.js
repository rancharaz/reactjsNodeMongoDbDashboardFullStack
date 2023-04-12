/* use mongoose to connect to mongodb */ /* creating schema */
const mongoose = require('mongoose');

/* types of fields */
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
})
/* table and Schema */
module.exports = mongoose.model("product", productSchema)