import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vz2PtwNakufQPZDAmrvT8WuNsvxjHGmg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => {
            this.setState({reviews: json.results})
        })
    }
    
    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Movie Reviews</h1>
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

export default LatestMovieReviewsContainer
