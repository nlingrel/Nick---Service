import React from 'react'
import styles from './styles.css'
import StarRating from '../StarRating/StarRating'

function Stars(props) {
  return (
    <div>
      <StarRating ratio={props.ratio} />
      <div className={`ratingRatioNumber ${styles.ratingRatioNumber}`}>
        <span className={`rating ${styles.rating}`}>
          <span>
            {props.ratio}
          </span>
        </span>
      </div>
      <div className={`ratingRatioCount ${styles.ratingRatioCount}`}>
        <span className={`ratingCountLabel ${styles.ratingCountLabel}`}>
          <span>
            {`${props.total} `}{props.total !== 1 ? `${props.plural.true}` : `${props.plural.false}`}
          </span>
        </span>
      </div>
    </div>
  );

}

export default Stars;