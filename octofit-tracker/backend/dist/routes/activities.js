"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = require("../models/Activity");
const router = (0, express_1.Router)();
// GET /api/activities/
router.get('/', async (req, res) => {
    try {
        const activities = await Activity_1.Activity.find().populate('userId');
        res.json({ message: 'Get all activities', activities });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch activities' });
    }
});
// GET /api/activities/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity_1.Activity.findById(id).populate('userId');
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json({ message: `Get activity ${id}`, activity });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch activity' });
    }
});
// POST /api/activities/
router.post('/', async (req, res) => {
    try {
        const activity = await Activity_1.Activity.create(req.body);
        res.status(201).json({ message: 'Activity created', activity });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create activity' });
    }
});
// PUT /api/activities/:id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity_1.Activity.findByIdAndUpdate(id, req.body, { new: true });
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json({ message: `Activity ${id} updated`, activity });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update activity' });
    }
});
// DELETE /api/activities/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity_1.Activity.findByIdAndDelete(id);
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json({ message: `Activity ${id} deleted` });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete activity' });
    }
});
exports.default = router;
//# sourceMappingURL=activities.js.map