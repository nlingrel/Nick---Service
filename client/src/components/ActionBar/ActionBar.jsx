import React from "react"
import styles from "./styles.css"

function ActionBar(props) {
  return (
    <div className={`actionBar2 ${styles.actionBar2}`}>
      <h2 className={`actionBarHeader2 ${styles.actionBarHeader2}`}>Reviews</h2>
      <div className={`writeReviewContainer2 ${styles.writeReviewContainer2}`}>
        <button type="button" className={`writeReview2 ${styles.writeReview2}`}>
          Write a review
        </button>
      </div>
    </div>
  )
}

export default ActionBar
