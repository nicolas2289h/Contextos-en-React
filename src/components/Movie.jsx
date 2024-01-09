import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Movie({ movie }) {
    const { user, toggleFavoriteMovieToUser } = useContext(UserContext)
    const isFavorite = user?.favoriteMovies?.includes(movie.id)

    return (
        <div className='card mb-4'>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className='card-body'>
                <h4 className='text-center'>{movie.title}</h4>

                {user && //solo mostrara el boton si es que existe el usuario
                    <button className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
                        onClick={() => toggleFavoriteMovieToUser(movie.id)}>Favorito</button>
                }
            </div>
        </div>
    )
}

export default Movie