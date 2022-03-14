import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
    // onClick() event listener will set selectedMovie variable in main-view to this movie
  }
}