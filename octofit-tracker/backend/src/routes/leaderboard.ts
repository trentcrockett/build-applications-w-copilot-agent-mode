import { Router, Request, Response } from 'express';
import { Leaderboard } from '../models/Leaderboard';

const router = Router();

// GET /api/leaderboard/
router.get('/', async (req: Request, res: Response) => {
  try {
    const leaderboard = await Leaderboard.find({ type: 'individual' })
      .populate('userId')
      .sort({ rank: 1 });
    res.json({
      message: 'Get individual leaderboard',
      leaderboard,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// GET /api/leaderboard/teams
router.get('/teams', async (req: Request, res: Response) => {
  try {
    const leaderboard = await Leaderboard.find({ type: 'team' })
      .populate('teamId')
      .sort({ rank: 1 });
    res.json({
      message: 'Get team leaderboard',
      leaderboard,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team leaderboard' });
  }
});

export default router;
