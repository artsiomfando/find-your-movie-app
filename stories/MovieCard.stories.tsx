import MovieCard, { Props } from '../components/MovieCard';

export default {
  title: 'MovieCard',
  component: MovieCard,
  argTypes: {
    title: {
      type: 'string',
      description: 'Movie title'
    },
    id: {
      type: 'number',
      options: [1, 2, 3, 4],
      control: {
        type: 'radio'
      }
    }
  }
};

const Template = (args: Props) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  poster: 'https://media.posterlounge.com/images/l/1901480.jpg',
  title: 'Monet',
  releaseDate: '2003-11-11',
  genres: ['Documentary', 'Comedy']
}

export const WithoutPoster = Template.bind({});
WithoutPoster.args = {
  id: 1,
  poster: '',
  title: 'Monet',
  releaseDate: '2003-11-11',
  genres: ['Documentary']
}
