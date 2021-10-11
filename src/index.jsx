import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';

import movies from './movies';

const App = () => (
  <>
  <Header/>
  <div className="content">
    {movies.map(film=><MovieList movie={film}/>)}
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
