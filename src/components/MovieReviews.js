import React from 'react'

const Review = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return(
        <div key={headline} className='review'>
            <header>
                <a className='review-link' href={link.url}>
                    {headline}
                </a>
                <br />
                <span className="author">{byline}</span>
            </header>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}

const movieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

movieReviews.defaultProps = {
    reviews: []
}

export default movieReviews