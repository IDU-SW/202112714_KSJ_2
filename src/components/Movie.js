import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function Movie({id, mCoverImage, title, rating, runtime, year, summary, genres}) {
    return (
        <div>
            <img src={mCoverImage} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{rating}점 | {runtime}분 | ({year})</p>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                <li key={genre}>{genre}</li>
                ))}
            </ul>
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