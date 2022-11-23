const transformMovieRuntime = (duration: number): string => {
  const minutesInHour = 60;
  const hours = Math.floor(duration / minutesInHour);
  const minutes = duration % minutesInHour;

  return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
};

export default transformMovieRuntime;
