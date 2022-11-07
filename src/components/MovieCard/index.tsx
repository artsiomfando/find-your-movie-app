import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

import { AppDispatch } from '../../redux/store';
import { fetchMovie } from '../../redux/apiCalls';
import defaultPoster from '../../assets/images/default-poster.jpg';

interface Props {
  id: number,
  poster: string
  title: string
  releaseDate?: string
  genres: string[]
}

const MovieCard = ({
  id, poster, title, releaseDate, genres
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const moveToMovieDetails = () => {
    dispatch(fetchMovie(id));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Card className="movieCard" id={id} onClick={moveToMovieDetails}>
      <Image src={poster ?? defaultPoster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{releaseDate?.slice(0, 4)}</Card.Meta>
        <Card.Description>{genres.join(', ')}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
