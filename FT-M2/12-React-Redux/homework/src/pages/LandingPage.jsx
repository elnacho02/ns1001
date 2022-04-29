import React from 'react'
import MoviesGrid from '../components/MoviesGrid'
import { connect } from "react-redux";
import Buscador from "../components/Buscador/Buscador"
import ResultGrid from "../components/ResultGrid";
function LandingPage({resultBusqueda}) {
    return (
        <div> 
           {resultBusqueda.length<1 && <MoviesGrid addToFav={true}/>
            }
            {resultBusqueda.length>0 && <ResultGrid addToFav={true}/>}
        </div>
    )
}

var mapStateToProps=(state)=>{
    return{
        resultBusqueda: state.result
    }
}

export default connect(mapStateToProps,{})(LandingPage)
