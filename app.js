const express = require('express')
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const products = require('./data/products.json');
const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Chichive API is running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const getProduct = products.filter(n => n.category_id === id);
    res.send(getProduct);
});

app.listen(port, () => {
    console.log("Chichive Server is Running...", port);
})