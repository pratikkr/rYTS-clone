import React from "react";
import { matchPath } from "react-router-dom";
import { data } from "../data";
// import { addFavourite, removeFromFavourites } from '../actions';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="container">
          <img src={movie.Poster} alt="Poster" className="image" />
          <div className="overlay">
            <div className="text">
              {movie.imdbRating}/10
              <p>{movie.Genre}</p>
              <button onClick={() => console.log("match")}>View Details</button>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="title">{movie.Title}</div>
          <div className="year">{movie.Year}</div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
