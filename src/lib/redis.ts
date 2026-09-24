// src/lib/redis.ts
// Upstash Redis REST client with 4 credential prefixes support and graceful local fallback

export interface RedisCredentials {
  url: string;
  token: string;
}

export function getRedisCredentials(): RedisCredentials | null {
  if (typeof process === 'undefined' || !process.env) return null;

  // 1. UPSTASH_REDIS_REST_*
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return {
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    };
  }

  // 2. KV_REST_API_*
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return {
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    };
  }

  // 3. STORAGE_REST_API_*
  if (process.env.STORAGE_REST_API_URL && process.env.STORAGE_REST_API_TOKEN) {
    return {
      url: process.env.STORAGE_REST_API_URL,
      token: process.env.STORAGE_REST_API_TOKEN,
    };
  }

  // 4. STORAGE_KV_REST_API_*
  if (process.env.STORAGE_KV_REST_API_URL && process.env.STORAGE_KV_REST_API_TOKEN) {
    return {
      url: process.env.STORAGE_KV_REST_API_URL,
      token: process.env.STORAGE_KV_REST_API_TOKEN,
    };
  }

  return null;
}

export async function redisCommand(command: string[]): Promise<any> {
  const creds = getRedisCredentials();
  if (!creds) return null;

  try {
    const res = await fetch(`${creds.url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${creds.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
    });

    if (!res.ok) {
      console.warn(`Upstash Redis error: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data.result;
  } catch (err) {
    console.warn('Redis command failed:', err);
    return null;
  }
}

// Like redisCommand, but throws on any failure so callers never report a write
// as saved when it was not.
export async function redisStrict(command: string[]): Promise<any> {
  const creds = getRedisCredentials();
  if (!creds) throw new Error('Redis not configured');
  const res = await fetch(creds.url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${creds.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error(`Redis error ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(String(data.error));
  return data.result;
}

// Fixed-window rate limiter. Fails open (allows) when Redis is unavailable so a
// storage outage never blocks real customers.
export async function rateLimit(key: string, max: number, windowSeconds: number): Promise<boolean> {
  try {
    if (!getRedisCredentials()) return true;
    const count = Number(await redisStrict(['INCR', `propps:rl:${key}`]));
    if (count === 1) await redisStrict(['EXPIRE', `propps:rl:${key}`, String(windowSeconds)]);
    return count <= max;
  } catch {
    return true;
  }
}

export function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for') || '';
  return fwd.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
}