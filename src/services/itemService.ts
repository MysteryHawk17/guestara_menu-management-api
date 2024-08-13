import prisma from "../prisma/client";
import { IItemCreate } from "../interfaces/Item";

// Create an item
export const createItem = async (data: IItemCreate) => {
  return await prisma.item.create({ data });
};

// Get all items
export const getAllItems = async () => {
  return await prisma.item.findMany();
};

// Get items by category ID
export const getItemsByCategoryId = async (categoryId: number) => {
  return await prisma.item.findMany({
    where: { categoryId },
  });
};

// Get items by subcategory ID
export const getItemsBySubcategoryId = async (subcategoryId: number) => {
  return await prisma.item.findMany({
    where: { subcategoryId },
  });
};

// Get an item by ID or name
export const getItemByIdOrName = async (idOrName: number | string) => {
  return await prisma.item.findFirst({
    where: {
      OR: [
        { id: typeof idOrName === "number" ? idOrName : undefined },
        { name: typeof idOrName === "string" ? idOrName : undefined },
      ],
    },
  });
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
  return await prisma.item.findMany({
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
};
