import { Router } from 'express';

const router = Router();

// TODO: call controller once it exists
router.get('/', (_req, res) => {
  res.json({ employees: [], note: 'TODO wire up controller/service' });
});

export default router;

