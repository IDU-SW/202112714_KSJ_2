import { useEffect, useState } from "react";

function App() {
  
  //영화 API
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.3&genre=Musical&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(()=> {
    getMovies()
  }, []);

  console.log(movies);

  return (
    <div>
      {loading? (<h1>Loading...</h1>) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
