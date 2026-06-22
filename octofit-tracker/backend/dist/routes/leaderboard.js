"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Leaderboard_1 = require("../models/Leaderboard");
const router = (0, express_1.Router)();
// GET /api/leaderboard/
router.get('/', async (req, res) => {
    try {
        const leaderboard = await Leaderboard_1.Leaderboard.find({ type: 'individual' })
            .populate('userId')
            .sort({ rank: 1 });
        res.json({
            message: 'Get individual leaderboard',
            leaderboard,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});
// GET /api/leaderboard/teams
router.get('/teams', async (req, res) => {
    try {
        const leaderboard = await Leaderboard_1.Leaderboard.find({ type: 'team' })
            .populate('teamId')
            .sort({ rank: 1 });
        res.json({
            message: 'Get team leaderboard',
            leaderboard,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch team leaderboard' });
    }
});
exports.default = router;
//# sourceMappingURL=leaderboard.js.map