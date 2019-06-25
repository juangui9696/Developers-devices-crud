const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.post('/', async (req, res) => {
    new Task()
    res.jason({
        status: 'task saved'
    });
});

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.jason({
        status: 'task updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id, req.body);
    res.jason({
        status: 'task deleted'
    });
});
module.exports = router;