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
