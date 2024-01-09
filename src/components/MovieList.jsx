import React, { useContext } from "react"
import Movie from "./Movie"
import MovieContext from "../contexts/MovieContext"

function MovieList() {
    const {movies} = useContext(MovieContext)
    
    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-4">
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList