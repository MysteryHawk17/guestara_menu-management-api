import { Request, Response } from "express";
import * as itemService from "../services/itemService";
import { IItemCreate } from "../interfaces/Item";

/**
 * @route POST /item
 * @desc Create a new item
 * @param {IItemCreate} req.body - The data needed to create an item
 * @returns {Object} 201 - Created item object
 * @returns {Object} 500 - Internal server error message
 */

export const createItem = async (req: Request, res: Response) => {
  try {
    const itemData: IItemCreate = req.body;
    const item = await itemService.createItem(itemData);
    res.status(201).json(item);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /item
 * @desc Get all items
 * @returns {Array} 200 - List of items
 * @returns {Object} 500 - Internal server error message
 */


export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /item/category/:categoryId
 * @desc Get items by category ID
 * @param {number} req.params.categoryId - The ID of the category to retrieve items from
 * @returns {Array} 200 - List of items under the specified category
 * @returns {Object} 500 - Internal server error message
 */

export const getItemsByCategoryId = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const items = await itemService.getItemsByCategoryId(parseInt(categoryId));
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /item/subcategory/:subcategoryId
 * @desc Get items by subcategory ID
 * @param {number} req.params.subcategoryId - The ID of the subcategory to retrieve items from
 * @returns {Array} 200 - List of items under the specified subcategory
 * @returns {Object} 500 - Internal server error message
 */

export const getItemsBySubcategoryId = async (req: Request, res: Response) => {
  try {
    const { subcategoryId } = req.params;
    const items = await itemService.getItemsBySubcategoryId(
      parseInt(subcategoryId)
    );
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route GET /item/:id
 * @desc Get an item by ID or name
 * @param {number|string} req.params.idOrName - The ID or name of the item to retrieve
 * @returns {Object} 200 - The item object matching the ID or name
 * @returns {Object} 500 - Internal server error message
 */

export const getItemByIdOrName = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idOrName = isNaN(Number(id)) ? id : parseInt(id);
    const item = await itemService.getItemByIdOrName(
      idOrName
    );
    res.status(200).json(item);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route PUT /item/:id
 * @desc Edit an item by its ID
 * @param {number} req.params.id - The ID of the item to edit
 * @param {Partial<IItemCreate>} req.body - The data to update the item
 * @returns {Object} 200 - Updated item object
 * @returns {Object} 500 - Internal server error message
 */

export const editItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemData: Partial<IItemCreate> = req.body;
    const updatedItem = await itemService.editItem(parseInt(id), itemData);
    res.status(200).json(updatedItem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
/**
 * @route GET /item/search
 * @desc Search items by name
 * @param {string} req.query.name - The name of the item(s) to search for
 * @returns {Array} 200 - List of items that match the search query
 * @returns {Object} 500 - Internal server error message
 */

export const searchItemsByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    console.log(req.query);
    const items = await itemService.searchItemsByName(name as string);
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
