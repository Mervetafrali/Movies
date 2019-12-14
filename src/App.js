import React from 'react';
import Header from './compenents/Header';
import SearchBar from './compenents/SearchBar';
import MovieList from "./compenents/MovieList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <SearchBar></SearchBar>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
