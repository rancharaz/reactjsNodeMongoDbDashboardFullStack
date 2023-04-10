/* initiate express */
const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./db/User')


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
    let user = new User(req.body);
    let result = await user.save();
    res.send(result)
})


/* 
const PORT = 5001; */

app.listen(8080)