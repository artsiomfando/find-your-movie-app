import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react';

import MovieContext, { TMovieContext } from '../MovieContext';

interface Props {
  id: number,
  poster: string
  title: string
  releaseDate: string
  genres: string[]
}

const MovieCard = ({
  id, poster, title, releaseDate, genres
}: Props) => {
  const [, setMovieID] = useContext(MovieContext) as TMovieContext;

  const moveToMovieDetails = () => {
    setMovieID(id);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Card className="movieCard" onClick={moveToMovieDetails}>
      <Image src={poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{releaseDate.slice(0, 4)}</Card.Meta>
        <Card.Description>{genres.join(', ')}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
