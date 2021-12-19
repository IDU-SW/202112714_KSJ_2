// import { StyleTwoTone } from "@material-ui/icons";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";


function Movie({id, mCoverImage, title, rating, runtime, year, summary, genres}) {
    return (
        <div>
            <div className={styles.movie}>
                <Link to={`/movie/${id}`}>
                    <img src={mCoverImage} alt={title}/>
                    <h2 className={styles.movie_title}>{title}</h2>
                </Link>
                    <div className={styles.movie_detail}>
                        <span className={styles.movie_rating}>{rating}점 | </span> 
                        <span className={styles.movie_runtime}>{runtime}분 | </span> 
                        <span className={styles.movie_year}>({year})</span>
                    </div>
                    <p className={styles.movie_summary}>{summary}</p>
                    <ul className={styles.movie_genres}>
                        {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                        ))}
                    </ul>

            </div>         
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    mCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;