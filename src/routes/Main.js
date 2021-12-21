import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Bookmark from "../components/Bookmark";
import Detail from "../routes/Detail";
// import MovieCreationTwoTone from "@material-ui/icons/MovieCreationTwoTone";
// import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Main.module.css'
import movieIcon from '../film.png'
import bookmarkIcon from '../bookmark_main.png'
import {BrowserRouter, Route, Router, Link, Switch} from "react-router-dom";

function Main(){
    //영화 API
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const [bookmark, setBookmark] = useState([]);
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

  const addBookmark = (movieImg) => {
    const newBookmark = [...bookmark, movieImg];
    setBookmark(newBookmark);
  }

  console.log(movies);

  return (
    <div>
      <section className={styles.container}>
        <BrowserRouter>
          <nav>
            <div className={styles.logo_block}>
              <Link to={`/`} style={{textDecoration: 'none'}}>  
                <h1 className={styles.logo_title}>Movie Awards</h1>
              </Link>
              <Link to={`/bookmark`}>
                <img src={bookmarkIcon} className={styles.bookmark_main}/>
              </Link>
            </div>
          </nav>    
          {loading? (
            <div>
              {/* <CircularProgress color="inherit"/>
              <div className="loading"><MovieCreationTwoTone fontSize="large"/></div> */}
              <div className={styles.loading_wrap}>
                <div className={styles.loading}><img src={movieIcon} style={{width:"100px"}}/></div>
              </div>
            </div>
          ) : (
            <div>
                <Switch>
                  <Route path="/movie/:id">
                    <Detail/>
                  </Route>
                  <Route path="/bookmark">
                    <Bookmark bookmark={bookmark} />
                  </Route>
                  <Route path="/">
                    <div className={styles.movies}> 
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

                          addBookmark={addBookmark}
                        />
                      ))}
                    </div>
                  </Route>
                </Switch>
            </div>
          )}
        </BrowserRouter>
      </section>
    </div>
  );
}

export default Main;