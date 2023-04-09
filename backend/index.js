/* initiate express */
const express = require('express');
/* connect mongo to express with moogoose */
const mongoose = require('mongoose')


const app = express();

/* connect to data and extract from collection/table products */
const connectDB = async () => {

    mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    const productSchema = new mongoose.Schema({});

    const product = mongoose.model('products', productSchema)
    const data = await product.find();
    console.warn(data);

}
connectDB()
/* const db = 'mongodb://127.0.0.1:27017/e-comm';
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected')
},
    error => {
        console.log(`Database could not be connected ${error}`)
    }
) */
/* 
app.get('/', (req, res) => {
    res.send("App is working")
});
 */
const PORT = 5000;

app.listen(5000)