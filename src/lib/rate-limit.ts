import { Redis } from "@upstash/redis";

// Cliente Redis usando variables de entorno
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Configuración del límite
const RATE_LIMIT = 5; // máximo 5 requests
const WINDOW_SIZE = 60; // en segundos

export async function rateLimit(ip: string) {
  const key = `rate_limit:${ip}`;

  const requests = await redis.incr(key);

  // Si es la primera request, definimos expiración
  if (requests === 1) {
    await redis.expire(key, WINDOW_SIZE);
  }

  if (requests > RATE_LIMIT) {
    return {
      success: false,
      remaining: 0,
    };
  }

  return {
    success: true,
    remaining: RATE_LIMIT - requests,
  };
}
