const express = require('express');
const app = express()
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

const products = require('./routes/prouduct');
const orders = require('./routes/order');
const userModel = require('./models/userModels');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.post('/signup', (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})



app.listen(process.env.PORT, () => {
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});