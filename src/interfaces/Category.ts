export interface ICategory {
  id?: number;
  name: string;
  image: string;
  description?: string;
  taxApplicability: boolean;
  tax?: number;
  taxType?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICategoryCreate {
  name: string;
  image: string;
  description?: string;
  taxApplicability: boolean;
  tax?: number;
  taxType?: string;
}
