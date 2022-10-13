const express = require('express');
const ProductsService = require('./../services/productService');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
    const products = service.find();
    res.status(200).json(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const products = service.findOne(id);
    res.status(200).json(products);
});

// Crear Producto
router.post('/', (req, res) => {
    const { body } = req;
    const newItem = service.create(body);

    res.status(201).json({
        message: 'product CREATED',
        data: newItem
    });
});

// Actualizar Producto
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.status(200).json({
        message: 'product UPDATED',
        data: body,
        id:id
    });
});

// Borrar Producto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const products = service.delete(id);
    res.status(200).json('product DELETED');
});

module.exports = router;