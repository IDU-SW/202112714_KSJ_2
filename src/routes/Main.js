import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import MovieCreationTwoTone from "@material-ui/icons/MovieCreationTwoTone";
import CircularProgress from '@material-ui/core/CircularProgress';
import '../Main.css'

function Main(){
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
      
      
      {loading? (
        <div>
          {/* <CircularProgress color="inherit"/> */}
          <div className="loading"><MovieCreationTwoTone fontSize="large"/></div>
        </div>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              mCoverImage={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              runtime={movie.runtime}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;