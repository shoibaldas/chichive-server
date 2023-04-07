const express = require('express')
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const products = require('./data/products.json');

app.get('/', (req, res) => {
    res.send('Chichive API is running');
});

app.get('/proudcts', (req, res) => {
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const getProduct = products.find(n => n._id === id);
    res.send(getProduct);
});

app.listen(port, () => {
    console.log("Chichive Server is Running...", port);
})