import { Request, Response } from "express";
import * as subcategoryService from "../services/subCategoryService";
import { ISubcategoryCreate } from "../interfaces/SubCategory";

/**
 * @route POST /subcategory
 * @desc Create a new subcategory
 * @param {ISubcategoryCreate} req.body - The data needed to create a subcategory
 * @returns {Object} 201 - Created subcategory object
 * @returns {Object} 500 - Internal server error message
 */

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategoryData: ISubcategoryCreate = req.body;
    const subcategory = await subcategoryService.createSubcategory(
      subcategoryData
    );
    res.status(201).json(subcategory);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


/**
 * @route GET /subcategory
 * @desc Get all subcategories
 * @returns {Array} 200 - List of all subcategories
 * @returns {Object} 500 - Internal server error message
 */

export const getAllSubcategories = async (req: Request, res: Response) => {
  try {
    const subcategories = await subcategoryService.getAllSubcategories();
    res.status(200).json(subcategories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /subcategory/category/:categoryId
 * @desc Get subcategories by category ID
 * @param {number} req.params.categoryId - The ID of the category to retrieve subcategories from
 * @returns {Array} 200 - List of subcategories under the specified category
 * @returns {Object} 500 - Internal server error message
 */

export const getSubcategoriesByCategoryId = async (
  req: Request,
  res: Response
) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await subcategoryService.getSubcategoriesByCategoryId(
      parseInt(categoryId)
    );
    res.status(200).json(subcategories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /subcategory/:idOrName
 * @desc Get a subcategory by ID or name
 * @param {number|string} req.params.id - The ID or name of the subcategory to retrieve
 * @returns {Object} 200 - The subcategory object matching the ID or name
 * @returns {Object} 500 - Internal server error message
 */

export const getSubcategoryByIdOrName = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idOrName = isNaN(Number(id)) ? id : parseInt(id);
    const subcategory = await subcategoryService.getSubcategoryByIdOrName(
      idOrName
    );
    res.status(200).json(subcategory);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route PUT /subcategory/:id
 * @desc Edit a subcategory by its ID
 * @param {number} req.params.id - The ID of the subcategory to edit
 * @param {Partial<ISubcategoryCreate>} req.body - The data to update the subcategory
 * @returns {Object} 200 - Updated subcategory object
 * @returns {Object} 500 - Internal server error message
 */

export const editSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subcategoryData: Partial<ISubcategoryCreate> = req.body;
    const updatedSubcategory = await subcategoryService.editSubcategory(
      parseInt(id),
      subcategoryData
    );
    res.status(200).json(updatedSubcategory);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
