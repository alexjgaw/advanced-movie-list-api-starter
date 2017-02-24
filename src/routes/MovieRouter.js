import { Router } from 'express';
import MovieController from '../controllers/MovieController';

const router = Router();

router.get('/movies', MovieController.list);

router.post('/movies', MovieController.add);

router.delete('/movies/:_id', MovieController.remove);

export default router;
