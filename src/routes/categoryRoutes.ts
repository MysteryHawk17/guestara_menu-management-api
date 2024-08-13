import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController";

const router = Router();

// Route to create a new category
router.post("/", createCategory);

// Route to get all categories
router.get("/", getAllCategories);

// Route to get a category by its ID
router.get("/:id", getCategoryById);

// Route to update a category by its ID
router.put("/:id", updateCategory);

export default router;
