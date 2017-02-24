import MovieModel from '../models/MovieModel';

const MovieController = {};

MovieController.list = (request, response, next) => {
  MovieModel.find({}).exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(error => {
      next('Error retrieving movie list: ' + error);
    });
};

MovieController.add = (request, response, next) => {
  const newMovie = new MovieModel({
    title: request.body.title,
    posterPath: request.body.posterPath,
    overview: request.body.overview
  });

  newMovie.save()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      next('Error adding movie: ' + error);
    });
};

MovieController.remove = (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      next('Error removing movie: ' + error);
    });
};

export default MovieController;
