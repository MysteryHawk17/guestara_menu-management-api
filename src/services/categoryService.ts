import { ICategoryCreate } from "../interfaces/Category";
import prisma from "../prisma/client";

export const createCategory = async (data: ICategoryCreate) => {
  return await prisma.category.create({ data });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    include: {
      subcategories: true,
      items: true,
    },
  });
};

export const getCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      subcategories: true,
      items: true,
    },
  });
};

export const updateCategory = async (id: number, data: Partial<ICategoryCreate>) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};
