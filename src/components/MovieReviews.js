// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => <div className="review-list">
    
    <ul>
        {props.reviews.map(review=><li className='review'>{review.display_title}.
            <ul>
                <li>Headline: {review.headline}</li>
                <li>Link: <a href={review.link.url}>{review.link.suggested_link_text}</a></li>
                <li>Date: {review.publication_date}</li>
            </ul>
        </li>)}
    </ul>

</div>

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews


// import React from 'react';

// const Review = ({
//   headline,
//   byline,
//   link,
//   summary_short
// }) => {
//   return (

//     <div
//       key={headline}
//       className="review"
//     >
//       <header>
//         <a
//           className="review-link"
//           href={link.url}
//         >
//           {headline}
//         </a>
//         <br/>
//         <span className="author">{byline}</span>
//       </header>
//       <blockquote>{summary_short}</blockquote>
//     </div>
//   );
// };

// const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

// MovieReviews.defaultProps = {
//   reviews: []
// };

// export default MovieReviews;





/*0:
byline: "Jeannette Catsoulis"
critics_pick: 1
date_updated: "2020-11-05 12:04:03"
display_title: "The Dark and the Wicked"
headline: "‘The Dark and the Wicked’ Review: Home, but Not Alone"
link: {type: "article", url: "http://www.nytimes.com/2020/11/05/movies/the-dark-and-the-wicked-review.html", suggested_link_text: "Read the New York Times Review of The Dark and the Wicked"}
mpaa_rating: "Not Rated"
multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2020/11/06/arts/darkand2/darkand2-mediumThreeByTwo210.jpg", width: 210, height: 140}
opening_date: "2020-11-06"
publication_date: "2020-11-05"
summary_short: "A family is threa */