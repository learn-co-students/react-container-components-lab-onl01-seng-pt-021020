// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
                <h2>{props.title} {props.rating === '' ? '(Not Yet Rated)' : `(${props.rating})`}</h2>
                <p>{props.summary}</p>
                <a href={props.link} target="_blank">{props.linkText}</a>
        </div>
    )
}

export default MovieReviews
