import React from 'react'
import styles from './styles.css'

function StarRating(props) {
    return (
        <div className={`starRatingWidthContainer ${styles.starRatingWidthContainer}`}>
            <span className={`starRating ${styles.starRating}`} style={{ clipPath: `inset(0% ${100 - props.ratio * 20}% 0% 0%)` }}>
                &real; &real; &real; &real; &real;
                </span>
            <span className={`starRatingEmpty ${styles.starRatingEmpty}`}>
                &real; &real; &real; &real; &real;
                </span>
        </div>

    );
}

export default StarRating;