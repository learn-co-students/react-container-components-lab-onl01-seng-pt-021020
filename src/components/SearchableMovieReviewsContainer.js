import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(URL + this.state.searchTerm)
            .then(res => res.json())
            .then(reviews => this.setState({
                reviews: reviews.results
            }))
    }

    render() {
        return (
            <div className="movie-reviews-search">
                <form onSubmit={this.handleSubmit}>
                    <h2>Search Reviews:</h2>
                    <input
                    type="text"
                    onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}

export default SearchableMovieReviewsContainer