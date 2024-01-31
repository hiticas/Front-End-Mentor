import { movieById, trandingMovies, fetchData } from './utils/fetchData'

function App() {
  const handleGetTrendingMovies = async () => {
    const trandingData = await fetchData('https://movies-tv-shows-database.p.rapidapi.com/', trandingMovies);
    console.log('trandingData =', trandingData);
  }

  const handleGetMovieById = async () => {
    const movieDataByID = await fetchData('https://movies-tv-shows-database.p.rapidapi.com/', movieById);
    console.log('movie by id tt27214365 =', movieDataByID);
  }

  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-3xl font-bold underline'>Hello</h1>
      <button className='border-2' onClick={handleGetTrendingMovies}>Get tranding movies</button>
      <button className='border-2' onClick={handleGetMovieById}>Get movies by id</button>
    </div>
  )
}

export default App
