const express = require('express');
const faker = require('faker');

const router = express.Router();
faker.locale = "es";

router.get('/', (req, res) => {
    try {
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
        res.status(200).json(users);
        
    } catch (error) {
        console.log( `error ${error.message}`) // log the error
        res.status(404).send('No se entoncroel recurso!');
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        res.status(201).json({
            message: 'created',
            data: body
        });
    } catch (error) {
        console.log( `error ${error.message}`) // log the error
        res.status(500).send('No se pudo crear el recurso!');
    }
    
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(200).json({
        message: 'update',
        data: body,
        id,
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'deleted',
        id,
    });
});

module.exports = router;