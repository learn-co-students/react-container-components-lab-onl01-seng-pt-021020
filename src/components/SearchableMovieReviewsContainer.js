import React, {Component} from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';


export default class SearchableMovieReviewsContainer extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm : '',
			reviews    : [],
		};
  }

	fetchReviews = (term) => {
    console.log(term)
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=6x9NpOeL4UlzFsFJAK7b4w08GM1AfXmM`).then((r) => r.json()).then((data) =>
			this.setState({
				reviews : data.results
			}, ()=> console.log(data))
		);
	};

	handleChange = (e) => {
    e.preventDefault()
		this.setState({searchTerm : e.target.value});
	};

	submitHandler = (e) => {
  e.preventDefault()
  this.fetchReviews(this.state.searchTerm)
  }

	render() {
		return (
			<div className="searchable-movie-reviews" onChange={this.handleChange}>
				<form onSubmit={this.submitHandler}>
					<input type="text" placeholder="search" value={this.state.searchTerm} onChange={(event) => this.handleChange(event)} />
					<input type="submit" value="search" />
				</form>
        <MovieReviews reviews={this.state.reviews} />
			</div>
		);
  }
  
  
}
