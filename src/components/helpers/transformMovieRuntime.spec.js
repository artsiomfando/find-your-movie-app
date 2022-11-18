import transformMovieRuntime from './transformMovieRuntime';

it('correct runtime adjustment', () => {
  const durationInMinutesOne = 75;
  const durationInMinutesTwo = 40;

  const adjustedRuntimeOne = transformMovieRuntime(durationInMinutesOne);
  const adjustedRuntimeTwo = transformMovieRuntime(durationInMinutesTwo);

  expect(adjustedRuntimeOne).toBe('1h 15min');
  expect(adjustedRuntimeTwo).toBe('40min');
});
