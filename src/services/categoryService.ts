import { ICategoryCreate } from "../interfaces/Category";
import { getCache, setCache } from "../middleware/cacheMiddleware";
import prisma from "../prisma/client";

export const createCategory = async (data: ICategoryCreate) => {
  return await prisma.category.create({ data });
};

export const getAllCategories = async () => {
  const cacheKey = "categories";
  const cachedData =  await getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const categories = await prisma.category.findMany({
    include: {
      subcategories: true,
      items: true,
    },
  });

  await setCache(cacheKey, categories);
  return categories;
};

export const getCategoryById = async (id: number) => {
  const cacheKey = `category:${id}`;
  const cachedData = await getCache(cacheKey);

  if (cachedData) {
    return cachedData;
  }
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      subcategories: true,
      items: true,
    },
  });

  if (category) {
    await setCache(cacheKey,category);
  }

  return category;
};

export const updateCategory = async (
  id: number,
  data: Partial<ICategoryCreate>
) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};
