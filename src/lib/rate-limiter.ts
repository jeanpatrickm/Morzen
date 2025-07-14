import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 10, // Allow 10 requests
  duration: 60, // Per 60 seconds
});

export async function rateLimiterMiddleware(ip: string) {
  try {
    await rateLimiter.consume(ip);
    return false; // Not rate-limited
  } catch {
    return true; // Rate-limited
  }
}
