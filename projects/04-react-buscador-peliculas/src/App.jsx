import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/movies'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
    getMovies({ search })
  }, 300)
  ,[])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  
  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            style={{ 
              border: '1px solid transparent', 
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...'/>
            <input type='checkbox' onChange={handleSort} checked={sort}></input>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading 
            ? <p>Cargando...</p>
            : <Movies movies={movies}/>
        }
      </main>

    </div>
  )
}

export default App
