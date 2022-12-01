import FilterGenre, { Props } from '../components/FilterGenre';

export default {
  title: 'FilterGenre',
  component: FilterGenre,
  argTypes: {
    activeGenre: {
      type: 'string',
      options: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
      control: {
        type: 'radio'
      }
    },
  }
};

const Template = (args: Props) => <FilterGenre {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeGenre: 'All'
}
