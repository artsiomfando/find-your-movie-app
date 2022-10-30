import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface Props {
  poster: string
  title: string
  releaseDate: string
  genres: string[]
}

const MovieCard = ({
  poster, title, releaseDate, genres
}: Props) => (
  <Card className="movieCard">
    <Image src={poster} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{releaseDate.slice(0, 4)}</Card.Meta>
      <Card.Description>{genres.join(', ')}</Card.Description>
    </Card.Content>
  </Card>
);

export default MovieCard;
