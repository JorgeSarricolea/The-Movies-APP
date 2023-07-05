export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  overview: string;

  original_title: string;
  status: string;
  original_language: string;
  budget: number;
  revenue: number;
}
