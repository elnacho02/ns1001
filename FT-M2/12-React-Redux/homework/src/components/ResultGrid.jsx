import React from 'react'
import { connect } from "react-redux";
import MovieCard from './MovieCard';
import styles from "./MoviesGrid.module.css";
function ResultGrid({result, addToFav}) {
    return (
        <ul className={styles.moviesGrid}>
            {result.map(elem => <MovieCard key={elem.id} movie={elem} addToFav={addToFav}/>
            )}
        </ul>
    )
}
var mapStateToProps = (state)=>{
    return{
        result: state.result
    }
}

export default connect(mapStateToProps,{})(ResultGrid)