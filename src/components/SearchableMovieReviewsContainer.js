import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    handleSubmit = searchTerm => {
        console.log(searchTerm)
//        fetch(URL + `?query=${searchTerm}`)
//        .then(response => response.json())
//        .then(movieData => {
//            this.setState({
//                reviews: Array.from(movieData.results)
//            })
//        })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        this.handleSubmit(Object.keys(event))
                    }}
                >
                    <input
                        type='text'
                        name='searchTerm'
                    />
                    <button type='submit'>
                        Search
                    </button>
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}
