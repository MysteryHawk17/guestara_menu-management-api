import prisma from "../prisma/client";
import { ISubcategoryCreate } from "../interfaces/SubCategory";

// Create a subcategory
export const createSubcategory = async (data: ISubcategoryCreate) => {
  return await prisma.subcategory.create({ data });
};

// Get all subcategories
export const getAllSubcategories = async () => {
  return await prisma.subcategory.findMany({
    include: {
      items: true,
    },
  });
};

// Get subcategories by category ID
export const getSubcategoriesByCategoryId = async (categoryId: number) => {
  return await prisma.subcategory.findMany({
    where: { categoryId },

    include: {
      items: true,
    },
  });
};

// Get a subcategory by ID or name
export const getSubcategoryByIdOrName = async (idOrName: number | string) => {
  console.log(idOrName);
  return await prisma.subcategory.findFirst({
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
