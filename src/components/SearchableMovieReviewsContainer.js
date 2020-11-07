import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews:[],
        searchTerm:""
    }


    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }  
    

    findReviews = (e) =>{
        e.preventDefault()
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(resp=>resp.json())
        .then(data=>this.setState({
                reviews:data.results})
            )
        this.setState({
            searchTerm:""
        })
    }

    render(){

        return <div className="searchable-movie-reviews-movie-reviews">
            <form onSubmit={this.findReviews}>
                <input type="text" name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}/>
                <input type="submit" value="Find"/>
            </form>
            <MovieReviews reviews={this.state.reviews} />
         </div>
    }
}

export default SearchableMovieReviewsContainer