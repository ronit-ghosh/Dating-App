import { Router } from 'express';
import searchNearbyUsersController from '../controllers/search-nearby-users.controller';

export const router = Router();

router.get('/feed', searchNearbyUsersController);