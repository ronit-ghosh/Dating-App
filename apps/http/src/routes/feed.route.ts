import { Router } from 'express';
import searchNearbyUsersController from '../controllers/search-nearby-users.controller';
import handleSwipeController from '../controllers/handle-swipe.controller';
import handleUnmatchController from '../controllers/handle-unmatch.controller';
import handleCanChatController from '../controllers/handle-can-chat.controller';
import getMatchesController from '../controllers/get-matches.controller';

export const router = Router();

router.get('/feed', searchNearbyUsersController);
router.post('/unmatch', handleUnmatchController);
router.post('/can-chat', handleCanChatController);
router.post('/swipe', handleSwipeController);
router.post('/get-matches', getMatchesController);