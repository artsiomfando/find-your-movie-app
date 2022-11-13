import { createAsyncThunk } from '@reduxjs/toolkit';

import moviesApi from '../api/moviesApi';
import { IMovie, IMovieBase } from '../components/types';

type TSearchCategory = 'title' | 'genres';

interface IFetchAllProps {
  sortCategory: string
  genreCategory: string
  searchQuery?: string
  searchCategory?: TSearchCategory
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchAll',
  async ({
    sortCategory, genreCategory, searchQuery, searchCategory
  }: IFetchAllProps) => {
    const response = await moviesApi.get('/movies', {
      params: {
        sortBy: sortCategory,
        sortOrder: 'desc',
        filter: genreCategory,
        search: searchQuery || '',
        searchBy: searchCategory
      }
    });
    return response.data.data;
  }
);

export const fetchMovie = createAsyncThunk(
  'movies/fetchById',
  async (id: number) => {
    const response = await moviesApi.get(`/movies/${id}`);
    return response.data;
  }
);

export const addMovie = createAsyncThunk(
  'movies/add',
  async (movieDetails: IMovieBase) => {
    const response = await moviesApi.post('/movies', movieDetails);
    return response.data;
  }
);

export const editMovie = createAsyncThunk(
  'movies/edit',
  async (movieDetails: IMovie) => {
    const response = await moviesApi.put('/movies/', movieDetails);
    return response.data;
  }
);

export const removeMovie = createAsyncThunk(
  'movies/remove',
  async (id: number) => {
    await moviesApi.delete(`/movies/${id}`);
    return id;
  }
);
