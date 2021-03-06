import React from 'react';
import IndividualRating from './IndividualRating.jsx';


const Ratings = (props) => {
  var arrOfRatings = [];
  for ( var key in props.ratings) {
    if (key !== 'ratings_id' && key !== 'average') {
      arrOfRatings.push({name: key, score: props.ratings[key]});
    }
  }

  return (
    <div>
      <h3 className='reviews-average'><span className='reviews-red-star'>★</span> {props.ratings.average}  ({props.numOfReviews} reviews)</h3>
      <div className='ratings-box'>
        {arrOfRatings.map(rating => {
          return (
            <IndividualRating
              key={rating}
              rating={rating}
              percentageBar={props.percentageBar}
            />
          );
        })}
        <p hidden>test</p>
      </div>
    </div>
  );

};

export default Ratings;