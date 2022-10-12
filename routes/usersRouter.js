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
            email:faker.internet.email(),
            image: faker.image.avatar(),
        });
    }
    res.json(users);
});

module.exports = router;