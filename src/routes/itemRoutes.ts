import express from 'express';
import {
  createItem,
  getAllItems,
  getItemByIdOrName,
  getItemsByCategoryId,
  getItemsBySubcategoryId,
  editItem,
  searchItemsByName
} from '../controllers/itemController';

const router = express.Router();

// Create a new item
router.post('/', createItem);

// Get all items
router.get('/', getAllItems);

// Search items by name
router.get('/search', searchItemsByName);

// Get item by ID or name
router.get('/:id', getItemByIdOrName);

// Get all items by category ID
router.get('/category/:categoryId', getItemsByCategoryId);

// Get all items by subcategory ID
router.get('/subcategory/:subcategoryId', getItemsBySubcategoryId);

// Update an item
router.put('/:id', editItem);


export default router;
