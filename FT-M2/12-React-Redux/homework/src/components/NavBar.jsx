import React from 'react'
import { Link } from "react-router-dom";
import Buscador from './Buscador/Buscador';
import styles from "../App.module.css";
import * as actionsCreators from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"


function NavBar({removeResult}) {
    return (
        <header className={styles.header}>
            <div className={styles.searchBar}>
                <Buscador />
            </div>
            <Link to="/" ><h1 className={styles.title} onClick={removeResult()}>NETFLEX</h1></Link>
            <Link to="/favorites">
            <div className={styles.favContainer}>
                <i class="fas fa-star"></i>
                    <h5>Favoritos</h5>
                
            </div>
            </Link>
            
        </header>
    )
}

const mapStateToProps = ()=>{

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
