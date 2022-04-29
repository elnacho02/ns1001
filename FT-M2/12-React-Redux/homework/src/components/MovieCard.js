import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { connect } from "react-redux";
import * as actionsCreators from "../actions/index";
import { bindActionCreators } from 'redux';

function MovieCard({movie, addToFav, addFavorites}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    function alert1(){
        Swal.fire(movie.title + " agregado a favoritos");
    }
   
    return (
        <li className={styles.movieCard}>
            {addToFav && <button type="text" className={styles.addToFav} onClick={()=>(addFavorites(movie))}><i class="fas fa-star"></i></button>}
            <Link to={"/movie/"+ movie.id}>
                <img 
                    width={230} 
                    height={345} 
                    className={styles.movieImage} 
                    src={imageUrl} 
                    alt={movie.title}
                /> 
            
            <div className={styles.title}>
                {movie.title}
            </div>
            </Link>
        </li>
    )
}
function mapStateToProps(state){
    return{
      result: state.result
    }
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(MovieCard);