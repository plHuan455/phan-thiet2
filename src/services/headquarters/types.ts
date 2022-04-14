export type HeadquatersData = {
  id: number;
  name: string;
  phone: string;
  addressText: string;
  addressLat: string;
  addressLong: string;
  displayOrder: string;
};

export type HeadquatersParams = {
  limit?: number;
  keyword?: string;
  page?: number;
};
