import React from 'react';

const MovieReviews = (props) => (
	<div className="review-list">
		{props.reviews.map((review, idx) => {
      return (
				<div className="review" key={idx}>
					<p>By:<em> {review.byline}</em></p>
					<h3>{review.display_title}</h3>
          <img src={review.multimedia.src} alt={review.display_title}/>
				</div>
			);
		})}
	</div>
);

export default MovieReviews;
