import { redis } from '@repo/db';
import { Router } from 'express';

export const router = Router();

router.post('/swipe', async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const { targetId, direction } = req.body;

    if (!targetId || !['left', 'right'].includes(direction)) {
        res.status(400).json({ error: 'Invalid swipe data' });
        return
    }

    // store in db

    // add to bloom filter - non-blocking
    redis.call('BF.ADD', `seen_profiles:${userId}`, targetId.toString())
        .catch(err => console.error('Failed to add to Bloom filter:', err));

    res.json({ success: true });
});
