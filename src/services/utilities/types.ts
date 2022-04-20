export interface UtilityCategoriesTypes {
  id: number;
  name: string;
  slug: string;
  displayOrder: number;
}

export interface UtilityListParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface UtilityListTypes {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  displayOrder: number;
  utilityCategories: UtilityCategory[];
}

interface UtilityCategory {
  id: number
  name: string
}
