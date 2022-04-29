import React from 'react'
import { connect } from "react-redux";
import MovieCard from '../MovieCard';
import styles from "../MoviesGrid.module.css";
function Favorites({favorites}) {
    return (
        <ul className={styles.moviesGrid}>
            {favorites.map(elem => <MovieCard key={elem.id} movie={elem} />
            )}
        </ul>
    )
}
var mapStateToProps = (state)=>{
    return{
        favorites: state.favorites
    }
}

export default connect(mapStateToProps,{})(Favorites)
