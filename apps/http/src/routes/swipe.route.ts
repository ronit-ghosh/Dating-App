import { Router } from 'express';
import handleSwipeController from '../controllers/handle-swipe.controller';

export const router = Router();

router.post('/swipe', handleSwipeController);
