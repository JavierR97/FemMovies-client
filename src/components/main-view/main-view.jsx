import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      // Creating a list of movies for testing purposes
      movies: [
        { _id: 1, Title: 'Eternals', Description: 'desc1...', ImagePath: '...' },
        { _id: 2, Title: 'Little Women', Description: 'desc2...', ImagePath: '...' },
        { _id: 3, Title: 'The Farewell', Description: 'desc3...', ImagePath: '...' }
      ],

      // Set selectedMovie to null in the beginning, will be used to open MovieView component
      selectedMovie: null
    };
  }

  // Create function to set the state of selectedMovie to the newSelectedMovie passed in onMovieClick and onBackClick props
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    // If movie list is empty, display default message
    if (movies.length === 0) return <div className="main-view">This list is empty!</div>;

    // Else, logic to display the main-view: 
    // If no movie is selected (selecteMovie = null), display a MovieCard for each movie in the list
    // If a movie is selected (via setSelectedMovie), display MovieView for this movie
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} /> // onBackClick prop is used in movie-view <button> element as function passed to onClick() event listener
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} /> // onMovieClick prop is used in movie-card <div> element as function passed to onClick() event listener
          ))
        }
      </div>
    );
  }
}

export default MainView;