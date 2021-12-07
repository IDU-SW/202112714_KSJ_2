import PropTypes from "prop-types";

function Movie({mCoverImage, title, rating, runtime, year, summary, genres}) {
    return (
        <div>
            <img src={mCoverImage} alt={title}/>
            <h2>{title}</h2>
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
    mCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;