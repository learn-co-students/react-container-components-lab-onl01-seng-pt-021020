import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'iWYmukFUxCtGRGP80DFslkNCYYn9BCcU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
            let sortedData = data.results.sort(function(a,b){
                if(a.display_title < b.display_title) {return -1;}
                if(a.display_title > b.display_title) {return 1;}
                return 0;
            })
            this.setState({
                reviews: sortedData
            })
        })
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='query' value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type='submit' value="Search" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;