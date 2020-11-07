import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import MovieReviews from './components/MovieReviews';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);