const express = require('express');
const router = express.Router();

const Dev = require('../models/Dev');

router.get('/', async (req, res) => {
    const devs = await Dev.find();
    console.log(devs);
    res.json(devs);
});

router.post('/', async (req, res) => {
    const devs= new Dev(req.body);
    await devs.save();
    res.json({
        status: 'Dev saved'
    });
});

router.put('/:id', async (req, res) => {
    await Dev.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Dev updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Dev.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Dev deleted'
    });
});
module.exports = router;