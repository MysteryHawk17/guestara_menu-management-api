import app from "./app";
import { connectRedis } from "./utils/redisClient";

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    // Connect to Redis
    await connectRedis();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Exit the process if Redis connection fails
  }
};

startServer();