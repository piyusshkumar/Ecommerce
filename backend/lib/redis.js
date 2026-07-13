import Redis from "ioredis"
import dotenv from "dotenv";

dotenv.config();
console.log("REDIS_URL:", process.env.REDIS_URL);
export const redis = new Redis(process.env.REDIS_URL);