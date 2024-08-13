import prisma from "../prisma/client";
import { IItemCreate } from "../interfaces/Item";
import { getCache , setCache } from "../middleware/cacheMiddleware";

// Create an item
export const createItem = async (data: IItemCreate) => {
  return await prisma.item.create({ data });
};

// Get all items
export const getAllItems = async () => {
  const cacheKey = "items";
  const getItems = await getCache(cacheKey);

  if (getItems) {
    return getItems;
  }

  const items = await prisma.item.findMany();
  await setCache("items", items);
  return items;
};

// Get items by category ID
export const getItemsByCategoryId = async (categoryId: number) => {
  const cacheKey = `item_category_${categoryId}`;
  const getItemsCategoryId = await getCache(cacheKey);
  if (getItemsCategoryId) {
    return getItemsCategoryId;
  }

  const items = await prisma.item.findMany({
    where: { categoryId },
  });

  await setCache(cacheKey, items);

  return items;
};

// Get items by subcategory ID
export const getItemsBySubcategoryId = async (subcategoryId: number) => {
  const cacheKey = `item_subcategory_${subcategoryId}`;
  const getItemsSubCategoryId = await getCache(cacheKey);
  if (getItemsSubCategoryId) {
    return getItemsSubCategoryId;
  }

  const items = await prisma.item.findMany({
    where: { subcategoryId },
  });

  await setCache(cacheKey, items);

  return items;
};

// Get an item by ID or name
export const getItemByIdOrName = async (idOrName: number | string) => {
  const cacheKey =
    typeof idOrName === "number"
      ? `item_id_${idOrName}`
      : `item_name_${idOrName}`;
  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const item = await prisma.item.findFirst({
    where: {
      OR: [
        { id: typeof idOrName === "number" ? idOrName : undefined },
        { name: typeof idOrName === "string" ? idOrName : undefined },
      ],
    },
  });

  if (!item) {
    return null;
  }
  
  await setCache(cacheKey, item);

  return item;
};

// Edit an item
export const editItem = async (id: number, data: Partial<IItemCreate>) => {
  return await prisma.item.update({
    where: { id },
    data,
  });
};

// Search items by name

export const searchItemsByName = async (name: string) => {
  const cacheKey = `item_search_${name}`;
  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const items = await prisma.item.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: name,
            mode: "insensitive",
          },
        },
        {
          name: {
            endsWith: name,
            mode: "insensitive",
          },
        },
        {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  await setCache(cacheKey, items);
  return items;
};
