import React, { useState } from 'react';

import FilterGenre from '../FilterGenre';
import FilterDropdown from '../FilterDropdown';
import FilterResults from '../FilterResults';
import ErrorBoundary from '../ErrorBoundary';
import './_filterBar.scss';

const mockData = [
  {
    id: 337167,
    title: 'Fifty Shades Freed',
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: '2016-02-07',
    poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    budget: 55000000,
    revenue: 136906000,
    genres: [
      'Drama',
      'Documentary',
      'Romance'
    ],
    runtime: 106
  },
  {
    id: 181808,
    title: 'Star Wars: The Last Jedi',
    tagline: 'The Saga Continues',
    vote_average: 5.1,
    vote_count: 4732,
    release_date: '2017-12-13',
    poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    budget: 200000000,
    revenue: 1325937250,
    genres: [
      'Fantasy',
      'Documentary',
      'Science Fiction'
    ],
    runtime: 152
  },
  {
    id: 284054,
    title: 'Black Panther',
    tagline: 'Long live the king',
    vote_average: 7.3,
    vote_count: 3788,
    release_date: '2018-02-13',
    poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    overview: "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    budget: 200000000,
    revenue: 1245257672,
    genres: [
      'Action',
      'Adventure',
      'Fantasy',
      'Science Fiction'
    ],
    runtime: 134
  },
  {
    id: 354912,
    title: 'Coco',
    tagline: 'The celebration of a lifetime',
    vote_average: 7.8,
    vote_count: 3619,
    release_date: '2017-10-27',
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    budget: 175000000,
    revenue: 700920729,
    genres: [
      'Adventure',
      'Comedy',
      'Family',
      'Animation'
    ],
    runtime: 105
  },
  {
    id: 333339,
    title: 'Ready Player One',
    tagline: 'A better reality awaits.',
    vote_average: 8.1,
    vote_count: 617,
    release_date: '2018-03-28',
    poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    overview: 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
    budget: 175000000,
    revenue: 0,
    genres: [
      'Adventure',
      'Documentary',
      'Science Fiction',
      'Action'
    ],
    runtime: 140
  },
  {
    id: 338970,
    title: 'Tomb Raider',
    tagline: 'Her legend begins',
    vote_average: 6.2,
    vote_count: 817,
    release_date: '2018-03-08',
    poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    overview: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
    budget: 94000000,
    revenue: 126025000,
    genres: [
      'Action',
      'Adventure'
    ],
    runtime: 118
  },
  {
    id: 284053,
    title: 'Thor: Ragnarok',
    tagline: 'No Hammer. No Problem.',
    vote_average: 7.4,
    vote_count: 5349,
    release_date: '2017-10-25',
    poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    overview: 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
    budget: 180000000,
    revenue: 854229371,
    genres: [
      'Action',
      'Adventure',
      'Fantasy'
    ],
    runtime: 130
  }
];

const SafeErrorComponent = ({ errorMessage }: { errorMessage: string }) => (
  <div>
    <p>Something went wrong!</p>
    <p>{errorMessage}</p>
  </div>
);

const FilterBar = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [sortCategory, setSortCategory] = useState('release_date');

  const onSortItem = (sortBy: string, data = [...filteredData]) => {
    setSortCategory(sortBy);

    if (sortBy === 'release_date') {
      setFilteredData(
        data.sort((a, b) => new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime())
      );
    }

    if (sortBy === 'vote_average') {
      setFilteredData(
        data.sort((a, b) => b[sortBy] - a[sortBy])
      );
    }
  };

  const onGenreItem = (genre: string) => {
    if (genre === 'all') {
      onSortItem(sortCategory, mockData);
    } else {
      const dataByGenre = mockData.filter((movie) => movie.genres.includes(genre));
      onSortItem(sortCategory, dataByGenre);
    }
  };

  return (
    <div className="filterBar">
      <div className="filterBar__nav">
        <FilterGenre onGenreChange={onGenreItem} />
        <FilterDropdown onSortChange={onSortItem} />
      </div>
      <ErrorBoundary ErrorComponent={SafeErrorComponent}>
        <FilterResults moviesList={filteredData} />
      </ErrorBoundary>
    </div>
  );
};

export default FilterBar;
