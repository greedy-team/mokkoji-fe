export interface Club {
  id: number;
  name: string;
  category: string;
  affiliation: string;
  description: string;
  recruitStartDate?: string;
  recruitEndDate?: string;
  imageUrl: string;
  favorite?: boolean;
}
