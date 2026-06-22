import { Router, Request, Response } from 'express';
import { Team } from '../models/Team';

const router = Router();

// GET /api/teams/
router.get('/', async (req: Request, res: Response) => {
  try {
    const teams = await Team.find().populate('members createdBy');
    res.json({ message: 'Get all teams', teams });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

// GET /api/teams/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate('members createdBy');
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: `Get team ${id}`, team });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
});

// POST /api/teams/
router.post('/', async (req: Request, res: Response) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json({ message: 'Team created', team });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create team' });
  }
});

// PUT /api/teams/:id
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body, { new: true });
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: `Team ${id} updated`, team });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update team' });
  }
});

// DELETE /api/teams/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndDelete(id);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: `Team ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team' });
  }
});

export default router;
