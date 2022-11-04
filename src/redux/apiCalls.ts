import { createAsyncThunk } from '@reduxjs/toolkit';

import moviesApi from '../api/moviesApi';
import { IMovie } from '../components/types';

interface IFetchAllProps {
  sortCategory: string
  genreCategory: string
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchAll',
  async ({ sortCategory, genreCategory }: IFetchAllProps) => {
    const response = await moviesApi.get('/movies', {
      params: {
        sortBy: sortCategory,
        sortOrder: 'desc',
        filter: genreCategory
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
  async (movieDetails: IMovie) => {
    const response = await moviesApi.post('/movies', movieDetails);
    return response.data;
  }
);

export const editMovie = createAsyncThunk(
  'movies/edit',
  async (id, data: any) => {
    const response = await moviesApi.put(`/movies/${id}`, data);
    return response.data;
  }
);

export const removeMovie = createAsyncThunk(
  'movies/remove',
  async ({ id }: any) => {
    await moviesApi.delete(`/movies/${id}`, id);
    return { id };
  }
);
