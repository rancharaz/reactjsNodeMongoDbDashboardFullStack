/* initiate express */
const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./model/User')/* import model */
const Product = require('./model/Product')

const app = express();

/* middleware */
app.disable('x-powered-by'); //less hackers know about our stack
app.use(express.json())
//adding cors 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
/*  */

/* endpoint */
app.post('/register', async (req, res) => {
    let user = new User(req.body); /* get data */
    let result = await user.save();/* save user */
    /* remove password  */
    result = result.toObject()
    delete result.password
    /*  */
    res.send(result)/* send to db */
})

app.post('/login', async (req, res) => {
    console.log(req.body)

    /* check for email & password */
    if (req.body.password && req.body.email) {
        /* find only one result */     /* remove password */
        let user = await User.findOne(req.body).select("-password");

        /* if user has any data/value */
        if (user) {
            res.send(user)
        } else {
            /* else */
            res.send({ result: "User not found" })
        }
    } else {
        /* else no password or email*/
        res.send({ result: "User not found" })
    }



})
/* route for addProducts */
app.post('/add-product', async (req, res) => {
    /* new data add from form/postman */
    let product = new Product(req.body);
    /*  save function*/
    let result = await product.save();
    /* send the data */
    res.send(result)
})

/* 
const PORT = 5001; */

app.listen(8080)