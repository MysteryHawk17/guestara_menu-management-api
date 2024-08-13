import { ICategory } from './Category';

export interface ISubcategory {
  id?: number;
  name: string;
  image: string;
  description?: string;
  taxApplicability: boolean;
  tax?: number;
  categoryId: number;
  category?: ICategory;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISubcategoryCreate {
  name: string;
  image: string;
  description?: string;
  taxApplicability: boolean;
  tax?: number;
  categoryId: number;
}
