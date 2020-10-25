import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    changeSearchTerm = event => {
        const searchTerm = event.target.value
        this.setState({
            searchTerm: searchTerm,
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(movieData => {
            this.setState({
                reviews: Array.from(movieData.results),
            })
        })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <h1>Search for Reviews</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='searchTerm'
                        id='search-term'
                        value={this.state.searchTerm}
                        onChange={this.changeSearchTerm}
                    />
                    <button>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
