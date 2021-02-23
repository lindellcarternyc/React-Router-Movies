import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'

export default function SavedList(props) {
  const history = useHistory()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink className="saved-movie" key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      ))}
      <div className="home-button" onClick={() => history.push('/')}>Home</div>
    </div>
  );
}
