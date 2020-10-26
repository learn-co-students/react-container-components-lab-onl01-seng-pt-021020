import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vz2PtwNakufQPZDAmrvT8WuNsvxjHGmg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({reviews: json.results})
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h1>Search Movies</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search Movies"/>
                </form>

                {this.state.reviews.map(movie => {
                    return (
                        <MovieReviews
                            title={movie.display_title}
                            rating={movie.mpaa_rating}
                            summary={movie.summary_short}
                            link={movie.link.url}
                            linkText={movie.link.suggested_link_text}
                        />
                    )
                })}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
