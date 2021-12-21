import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import movieIcon from '../film.png'

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
        <div className={styles.container}>
        {loading? (
            <div className={styles.loading_wrap}>
                {
                <div className={styles.loading}>
                    <img src={movieIcon} style={{width:"100px"}}/>
                </div>
                }
            </div>
        ) : (
            <div>
                <img className={styles.bg_img} src={movie.background_image} alt={movie.title}/>     
                <h1 className={styles.bg_text}>{movie.title}</h1>
                <div className={styles.detail}>
                     <div className={styles.movie_detail}>
                        <img className={styles.poster_img} src={movie.medium_cover_image} alt={movie.title}/>
                        <h2 className={styles.title}>
                            <div>{movie.title}</div>
                        </h2>
                        <span className={styles.movie_rating}>{movie.rating}점 | </span> 
                        <span className={styles.movie_runtime}>{movie.runtime}분 | </span> 
                        <span className={styles.movie_year}>({movie.year})</span>       
                        <div className={styles.movie_description}>{movie.description_intro}</div>
                        <ul className={styles.movie_genres}>
                            {movie.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )}
        </div>


    );
}
export default Detail;