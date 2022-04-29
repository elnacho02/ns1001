import React from "react";
import Favorites from "./components/Favorites/Favorites";
import store from "./store/index";
import { Route } from "react-router-dom";
import  { Provider } from 'react-redux';
import LandingPage from "./pages/LandingPage";
import MovieDetails from "./pages/MovieDetails";
import NavBar from "./components/NavBar";

function App({result}) {
  return (
      <Provider store={store}>
        <React.Fragment>
            <NavBar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/favorites" component={Favorites} />
            <Route path="/movie/:movieId" component={MovieDetails} />
        </React.Fragment>
      </Provider>
  );
}

export default App;
