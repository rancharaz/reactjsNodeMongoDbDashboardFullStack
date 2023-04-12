/* use mongoose to connect to mongodb */ /* creating schema */
const mongoose = require('mongoose');

/* types */
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
/* table and Schema */
module.exports = mongoose.model("users", userSchema)