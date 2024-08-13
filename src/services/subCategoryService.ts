import prisma from "../prisma/client";
import { ISubcategoryCreate } from "../interfaces/SubCategory";
import { getCache, setCache } from "../middleware/cacheMiddleware";

// Create a subcategory
export const createSubcategory = async (data: ISubcategoryCreate) => {
  return await prisma.subcategory.create({ data });
};

// Get all subcategories
export const getAllSubcategories = async () => {
  const cacheKey = "subcategories";
  const cachedData = await getCache(cacheKey);

  if (cachedData) {
    return cachedData;
  }
  const subcategories = await prisma.subcategory.findMany({
    include: {
      items: true,
    },
  });
  await setCache(cacheKey, subcategories);

  return subcategories;
};

// Get subcategories by category ID
export const getSubcategoriesByCategoryId = async (categoryId: number) => {
  const cacheKey = `subcategories_category:${categoryId}`;
  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const items = await prisma.subcategory.findMany({
    where: { categoryId },

    include: {
      items: true,
    },
  });

  await setCache(cacheKey, items);

  return items;
};

// Get a subcategory by ID or name
export const getSubcategoryByIdOrName = async (idOrName: number | string) => {
  const cacheKey =
    typeof idOrName === "number"
      ? `subcategory_id_${idOrName}`
      : `subcategory_name_${idOrName}`;
  const cachedData = await getCache(cacheKey);

  if (cachedData) {
    return cachedData;
  }
  const subcategory = await prisma.subcategory.findFirst({
    where: {
      OR: [
        { id: typeof idOrName === "number" ? idOrName : undefined },
        { name: typeof idOrName === "string" ? idOrName : undefined },
      ],
    },
    include: {
      items: true,
    },
  });

  if (subcategory) {
    await setCache(cacheKey, subcategory);
  }

  return subcategory;
};

// Edit a subcategory
export const editSubcategory = async (
  id: number,
  data: Partial<ISubcategoryCreate>
) => {
  return await prisma.subcategory.update({
    where: { id },
    data,
  });
};
