
const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

// Get all aliens
router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

// Get an alien by ID
router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

// Create a new alien
router.post('/', async (req, res) => {
    try {
        const alien = new Alien(req.body);
        const savedAlien = await alien.save();
        res.json(savedAlien);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});

// Update an alien by ID
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        Object.assign(alien, req.body); // Update fields
        const updatedAlien = await alien.save();
        res.json(updatedAlien);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});

module.exports = router;

