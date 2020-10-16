import React from 'react'

const MovieReviews = props => (
    <div className="review-list">
      {props.reviews.map((review, i) => {
        return (
        <div key={i} className="review">
          <li>{review.byline}</li>
          <h5>{review.display_title}</h5>
          <p>{review.summary_short}</p>
        </div>
        )
      })}
    </div>
)
export default MovieReviews
