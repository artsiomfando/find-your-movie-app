import { createContext } from 'react';

export type TMovieContext = [number, React.Dispatch<React.SetStateAction<number>>];

const MovieContext = createContext<TMovieContext | null>(null);

export default MovieContext;
