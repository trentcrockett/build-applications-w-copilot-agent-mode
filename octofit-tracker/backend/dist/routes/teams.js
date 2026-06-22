"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = require("../models/Team");
const router = (0, express_1.Router)();
// GET /api/teams/
router.get('/', async (req, res) => {
    try {
        const teams = await Team_1.Team.find().populate('members createdBy');
        res.json({ message: 'Get all teams', teams });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});
// GET /api/teams/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team_1.Team.findById(id).populate('members createdBy');
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json({ message: `Get team ${id}`, team });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch team' });
    }
});
// POST /api/teams/
router.post('/', async (req, res) => {
    try {
        const team = await Team_1.Team.create(req.body);
        res.status(201).json({ message: 'Team created', team });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create team' });
    }
});
// PUT /api/teams/:id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team_1.Team.findByIdAndUpdate(id, req.body, { new: true });
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json({ message: `Team ${id} updated`, team });
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update team' });
    }
});
// DELETE /api/teams/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team_1.Team.findByIdAndDelete(id);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }
        res.json({ message: `Team ${id} deleted` });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete team' });
    }
});
exports.default = router;
//# sourceMappingURL=teams.js.map