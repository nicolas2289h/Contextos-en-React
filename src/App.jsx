import './App.css'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import './components/movie.css'
import MovieContext, { MovieProvider } from './contexts/MovieContext'
import { UserProvider } from './contexts/UserContext'

function App() {

  return (
    <div>
      <UserProvider>
        <MovieProvider>
          <Navbar />
          <MovieList />
        </MovieProvider>
      </UserProvider>
    </div>
  )
}

export default App
