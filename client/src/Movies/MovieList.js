import React from 'react'
import { useHistory } from 'react-router-dom'

export default function MovieList(props) {
  const history = useHistory()

  const selectMovie = id => history.push(`/movies/${id}`)

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} onClick={selectMovie}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card" onClick={() => props.onClick(props.movie.id)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
