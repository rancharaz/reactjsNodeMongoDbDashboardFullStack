/* initiate express */
const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./model/User')/* import model */
const Product = require('./model/Product')

const Jwt = require('jsonwebtoken'); /* jwt for auth to have token    */
const jwtKey = "e-comm";



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

/* endpoint for register user  */
app.post('/register', async (req, res) => {
    let user = new User(req.body); /* get data */
    let result = await user.save();/* save user */
    /* remove password  */
    result = result.toObject()
    delete result.password
    /* add token to register to result variable  */
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        /* if token error */
        if (err) {
            res.send({ result: "something went wrong try after two time" })
        }/* show token */
        res.send({ result, auth: token }) /* getting the auth token here */
    })
    /* res.send(result) send to db */
})


/* endpoint for login user  */
app.post('/login', async (req, res) => {
    console.log(req.body)

    /* check for email & password */
    if (req.body.password && req.body.email) {
        /* find only one result */     /* remove password */
        let user = await User.findOne(req.body).select("-password");

        /* if user has any data/value login*/
        if (user) {
            /* assign jwt token while login / use user to send jwtkey expires 2hrs */
            Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                /* if token error */
                if (err) {
                    res.send({ result: "something went wrong try after two hours" })
                }/* show token */
                res.send({ user, auth: token }) /* getting the auth token here */
            })

        } else {
            /* else */
            res.send({ result: "User not found" })
        }
    } else {
        /* else no password or email*/
        res.send({ result: "User not found" })
    }



})
/* endPoint for adding products  */
app.post('/add-product', verifyToken, async (req, res) => {
    /* new data add from form/postman */
    let product = new Product(req.body);
    /*  save function*/
    let result = await product.save();
    /* send the data */
    res.send(result)
})


/* endPoint for getting all product route */ /* use product model to get products */
app.get('/products', verifyToken, async (req, res) => {
    let products = await Product.find();/* all products */

    /* no products in result */
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No products found" })
    }
})

/* endPoint to delete by id method */
app.delete('/product/:id', verifyToken, async (req, res) => {
    /*  res.send(req.params.id);  *//* id from db */
    const result = await Product.deleteOne({ _id: req.params.id }); /* identify id from db to id frontend & delete */
    res.send(result);/* send delete request */
})

/* endPoint to get by id method */
app.get('/product/:id', verifyToken, async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });/* identify id from db to id frontend & update */
    /* if one found show result else show record not found */
    if (result) {
        res.send(result)
    } else {
        res.send({ result: "No record found" })
    }
})
/* endPoint to update product method */

app.put('/product/:id', verifyToken, async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },/* get id */
        { $set: req.body }/* set is used to update the data/body */
    )
    res.send(result)
})

/* endPoint to search by id */ /* search more field '$or' */
app.get('/search/:key', verifyToken, async (req, res) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    })
    res.send(result)
})




/* middleware to authenticate JWT back into backend */
/* next is use when the function middleware is finished it moves to the actual function */
function verifyToken(req, res, next) {

    let token = req.headers['authorization']/* getting token from headers */
    if (token) {
        token = token.split(' ')[1];/* split from bearer *//* bearer is from position 0, removed, token position 1 showed */
        /*  console.log("middleware called if", token) */
        /* Verify token */
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                res.status(401).send({ response: 'Please provide valid token' })/* token not good in header */
            } else {
                next();/* if good move to next part */
            }
        })

    } else {
        /* else not token */
        res.status(403).send({ response: 'Please add token with header' })/* token not found in header */
    }
    /*     console.log("test token is : " + token)
     */
}





/* 
const PORT = 5001; */

app.listen(8080)