const express = require('express');
const faker = require('faker');

const router = express.Router();
faker.locale = "es";

router.get('/', (req, res) => {
    const users = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        users.push({
            id: faker.datatype.uuid(),
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            jobTitle: faker.name.jobTitle(),
            email: faker.internet.email(),
            image: faker.image.avatar(),
        });
    }
    res.json(users);
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'update',
        data: body,
        id,
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id,
    });
});

module.exports = router;