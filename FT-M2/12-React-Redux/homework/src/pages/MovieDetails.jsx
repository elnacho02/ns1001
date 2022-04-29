import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";


export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img className={styles.col} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <h4><strong>{movie.title}</strong></h4>
                <p>
                    {movie.genres.map(x => x.name).join(", ")}
                </p>
                
                <p>{movie.overview}</p>
                
            </div>
        </div>
    )
}

export default MovieDetails
