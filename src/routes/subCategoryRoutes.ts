import express from 'express';
import {
  createSubcategory,
  getAllSubcategories,
  getSubcategoryByIdOrName,
  getSubcategoriesByCategoryId,
  editSubcategory,
} from '../controllers/subCategoryController';

const router = express.Router();

// Create a new subcategory
router.post('/', createSubcategory);

// Get all subcategories
router.get('/', getAllSubcategories);

// Get subcategory by ID or name
router.get('/:id', getSubcategoryByIdOrName);

// Get all subcategories by category ID
router.get('/category/:categoryId', getSubcategoriesByCategoryId);

// Update a subcategory
router.put('/:id', editSubcategory);


export default router;