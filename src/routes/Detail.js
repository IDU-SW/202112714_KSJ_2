import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([])
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json);
    };
    useEffect(()=>{
        getMovie()      
    }, []);
    return (
        <div>
        {loading? (<h1>Loading...</h1>) : (
            <div>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <h2>
                    <div>{movie.title}</div>
                </h2>
                <p>{movie.rating}점 | {movie.runtime}분 | ({movie.year})</p>
                <p>{movie.description_intro}</p>
                 <ul>
                    {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>
        )}
        </div>


    );
}
export default Detail;