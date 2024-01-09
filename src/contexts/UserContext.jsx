import React, { createContext, useState } from 'react'

const UserContext = createContext()

const initialUser = {
    id: 1,
    name: 'Nicolas',
    favoriteMovies: [1, 2]
}

// Provider
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser)

    const login = () => {
        setUser(initialUser)
    }

    const logout = () => {
        setUser(null)
    }

    const toggleFavoriteMovieToUser = (movieId) => {
        const favoriteMovies = user.favoriteMovies.includes(movieId)
        ? user.favoriteMovies.filter(item=> item !== movieId)    //si ya lo tiene, lo elimina
        : [...user.favoriteMovies, movieId] //si no lo tiene, lo agrega

        setUser(
            {
                ...user,
                favoriteMovies
            })
    }

    const data = { user, login, logout, toggleFavoriteMovieToUser }
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}



export { UserProvider }
export default UserContext