import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 18449,
  },
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

const connectRedis = async () => {
  try {
    await client.connect();
    console.log("Redis connected successfully");
  } catch (err) {
    console.error("Error connecting to Redis:", err);
    throw err;
  }
};

export { client, connectRedis };
