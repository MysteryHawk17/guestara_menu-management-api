import { Request, Response } from "express";
import * as categoryService from "../services/categoryService";
import { ICategoryCreate } from "../interfaces/Category";


/**
 * @route POST /category
 * @desc Create a new category
 * @param {ICategoryCreate} req.body - The data needed to create a category
 * @returns {Object} 201 - Created category object
 * @returns {Object} 500 - Internal server error message
 */

export const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryData: ICategoryCreate = req.body;
    const category = await categoryService.createCategory(categoryData);
    res.status(201).json(category);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /category
 * @desc Get all categories
 * @returns {Array} 200 - List of categories
 * @returns {Object} 500 - Internal server error message
 */
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /category/:id
 * @desc Get a category by its ID
 * @param {number} req.params.id - The ID of the category to retrieve
 * @returns {Object} 200 - Category object
 * @returns {Object} 404 - Category not found message
 * @returns {Object} 500 - Internal server error message
 */

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getCategoryById(
      Number(req.params.id)
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route PUT /category/:id
 * @desc Update a category by its ID
 * @param {number} req.params.id - The ID of the category to update
 * @param {Partial<ICategoryCreate>} req.body - The data to update the category
 * @returns {Object} 200 - Updated category object
 * @returns {Object} 500 - Internal server error message
 */

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateCategoryData:Partial<ICategoryCreate> = req.body;
    const category = await categoryService.updateCategory(
      parseInt(id),
      updateCategoryData      
    );
    res.status(200).json(category);
  } catch (error :any) {
    res.status(500).json({ error: error.message });
  }
};

