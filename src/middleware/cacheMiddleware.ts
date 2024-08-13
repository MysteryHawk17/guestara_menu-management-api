import { client } from "../utils/redisClient";
import { CACHE_EXPIRY } from "../config/redisConfig";

// Funtion to get Cache if exists or return null
const getCache = async (key: string) => {
  try {
    const data = await client.get(key);
    if (data == null) {
      return null;
    }
    const parsedData = await JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.error("Error fetching from cache:", err);
    return null;
  }
};

// Function to set cache
const setCache = async (key: string, data: any) => {
  try {
    await client.setEx(key, CACHE_EXPIRY, JSON.stringify(data));
  } catch (err) {
    console.error("Error setting cache:", err);
  }
};

// Function to delete cache
const deleteCache = async (key: string) => {
  try {
    await client.del(key);
  } catch (err) {
    console.error("Error deleting cache:", err);
  }
};

export { getCache, setCache, deleteCache };
