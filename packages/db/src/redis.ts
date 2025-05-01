import { createClient } from 'redis';

const redis = createClient({
  url: 'redis://localhost:6379',
});

redis.on('error', (err) => {
  console.error('Redis Client Error', err);
});

if (!redis.isOpen) {
  redis.connect().catch(console.error);
}

export default redis;
