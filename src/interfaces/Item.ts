import { ICategory } from './Category';
import { ISubcategory } from './SubCategory';

export interface IItem {
  id?: number;
  name: string;
  image: string;
  description?: string;
  taxApplicability: boolean;
  tax?: number;
  baseAmount: number;
  discount?: number;
  totalAmount: number;
  subcategoryId?: number;
  subcategory?: ISubcategory;  
  categoryId: number;
  category?: ICategory;        
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IItemCreate {
  name: string;
  image: string;
  description?: string;
  taxApplicability: boolean;
  tax?: number;
  baseAmount: number;
  discount?: number;
  totalAmount: number;
  subcategoryId?: number;
  categoryId: number;
}
