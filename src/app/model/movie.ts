export interface Movie {
  MID: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  id?: number;
  ratings:{
    stars: string;
    comment: string;
  }[];
}
