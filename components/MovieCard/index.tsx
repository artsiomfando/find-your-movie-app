import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import defaultPoster from '../../public/assets/images/default-poster.jpg';

export interface Props {
  id: number,
  poster: string
  title: string
  releaseDate?: string
  genres: string[]
  onItemClick: (id: number) => void
}

const MovieCard = ({
  id, poster, title, releaseDate, genres, onItemClick
}: Props) => (
  <Card className="movieCard" id={id} onClick={() => onItemClick(id)}>
    <Image src={poster ?? defaultPoster} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{releaseDate?.slice(0, 4)}</Card.Meta>
      <Card.Description>{genres?.join(', ')}</Card.Description>
    </Card.Content>
  </Card>
);

export default MovieCard;
