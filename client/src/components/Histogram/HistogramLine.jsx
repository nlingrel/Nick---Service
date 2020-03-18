import React from "react"
import styles from "./styles.css"

function HistogramLine(props) {
    return (
        <div className={`inlineHistogramRatingsStarContainer ${styles.inlineHistogramRatingsStarContainer2}`} role="button">
            <div className={`inlineHistogramRatingsStar2 ${styles.inlineHistogramRatingsStar2}`}>
                {props.reviewCounts.star}
                <span className={`glyph2 ${styles.glyph2}`}>
                    &real;
              </span>
            </div>
            <div className={` inlineHistogramRatingsBar2 ${styles.inlineHistogramRatingsBar2}`}>
                <span className={`contentSecondaryRatingsContainer2 ${styles.contentSecondaryRatingsContainer2}`}>
                    <span className={`contentSecondaryRatingsValueWidthFromRating2 ${styles.contentSecondaryRatingsValueWidthFromRating2}`}
                        style={{ width: `${(props.reviewCounts.count) / props.ratioCount * 100}% ` }}>
                    </span>
                </span>
            </div>
            <div className={`inlineHistogramRatingsScore2 ${styles.inlineHistogramRatingsScore2}`}>
                <span> {props.reviewCounts.count} </span>
            </div>
        </div>
    )
}

export default HistogramLine