export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface IMovieState {
  movies: IMovie[]
  activeMovie: IMovie | null,
  sortByCategory: string
  filterByGenre: string
}

export interface IState {
  movie: IMovieState
}

export type TSortCategory = keyof IMovie;

export interface FilterOptions {
  text: string
  value: TSortCategory
}
