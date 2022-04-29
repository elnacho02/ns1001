import { useEffect, useState } from "react";
import { useLocation } from "react-router";
 import { get } from "../utils/httpClient"; 
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import * as actionsCreators from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

function useQuery(){
  return new URLSearchParams(useLocation().search)
}
function MoviesGrid({addToFav, result, fetchPost}){
   const [movies, setMovies] = useState([]);
    const query = useQuery();
    const search = query.get("search")
    
    useEffect(() => {
    const searchUrl = search ? "/search/movie?query=" + search : "discover/movie" 
    /* fetchPost(searchUrl) */
    get(searchUrl).then((data) => {
      setMovies(data.results);})
  },[search]);
     
 return (
        <ul className={styles.moviesGrid}>
            {movies.map(elem => <MovieCard key={elem.id} movie={elem} addToFav={addToFav}/>
            )}
        </ul>
    )
}

/* export default MoviesGrid; */
function mapStateToProps(state){
  return{
    result: state.result
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MoviesGrid)