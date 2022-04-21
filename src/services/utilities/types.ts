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

export interface UtilityListBySubDivisionParams {
  page?: number;
  limit?: number;
}

export interface UtilityListBySubDivisionTypes {
  hasCategory: boolean;
  utilities: [
    {
      id: number;
      name: string;
      slug: string;
      thumbnail: string;
      description: string;
      displayOrder: number,
      utilityCategories: [
        {
          id: number,
          name: string
        }
      ]
    }
  ]
}

export interface UtilityListBySubDivisionHasCategoryTypes {
  hasCategory: boolean;
  categories: [
    {
      id: 7;
      name: string;
      slug: string;
      displayOrder: number;
      utilities: [
        {
          id: number;
          name: string;
          slug: string;
          thumbnail: string;
          description: string;
          displayOrder: number;
        }
      ]
    }
  ]
}
