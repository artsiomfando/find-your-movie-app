import * as yup from 'yup';

const movieFormSchema = yup.object().shape({
  title: yup.string().required(),
  release_date: yup.string(),
  poster_path: yup.string().url().required(),
  vote_average: yup.number().min(0).max(10),
  genres: yup.array().of(yup.string()).min(1).required(),
  runtime: yup.number().integer().positive().required(),
  overview: yup.string().required()
});

export default movieFormSchema;
