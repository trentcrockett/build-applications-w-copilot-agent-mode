"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
// GET /api/workouts/
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout_1.Workout.find().populate('userId');
        res.json({ message: 'Get all workouts', workouts });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch workouts' });
    }
});
// GET /api/workouts/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout_1.Workout.findById(id).populate('userId');
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.json({ message: `Get workout ${id}`, workout });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch workout' });
    }
});
// POST /api/workouts/
router.post('/', async (req, res) => {
    try {
        const workout = await Workout_1.Workout.create(req.body);
        res.status(201).json({ message: 'Workout created', workout });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create workout' });
    }
});
// PUT /api/workouts/:id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout_1.Workout.findByIdAndUpdate(id, req.body, { new: true });
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.json({ message: `Workout ${id} updated`, workout });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update workout' });
    }
});
// DELETE /api/workouts/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout_1.Workout.findByIdAndDelete(id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.json({ message: `Workout ${id} deleted` });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete workout' });
    }
});
// GET /api/workouts/suggestions/personalized
router.get('/suggestions/personalized', async (req, res) => {
    try {
        // In a real app, this would use ML to generate personalized recommendations
        const suggestions = await Workout_1.Workout.find().limit(3).populate('userId');
        res.json({
            message: 'Get personalized workout suggestions',
            suggestions,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch suggestions' });
    }
});
exports.default = router;
//# sourceMappingURL=workouts.js.map