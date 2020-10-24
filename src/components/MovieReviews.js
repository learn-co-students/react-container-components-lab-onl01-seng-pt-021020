import React from 'react';

const Review = ({display_title, summary_short}) => {
    return(
        <div className='review' key={display_title}>
            <h4>{display_title}</h4>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = (props) => {
    return(
        <div className='review-list'>
            {props.reviews.map(Review)}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;

