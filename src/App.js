import React from 'react';
import Header from './compenents/Header';
import SearchBar from './compenents/SearchBar';
import MovieList from "./compenents/MovieList";
import MovieDetail from "./compenents/MovieDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <SearchBar />
              <MovieList />

            </Route>
            <Route path="/detay">
              <MovieDetail></MovieDetail>

            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
