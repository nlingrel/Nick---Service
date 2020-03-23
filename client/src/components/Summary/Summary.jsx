import React from "react"
import styles from "./styles.css"
import Histogram from "../Histogram/Histogram"
import StarRating from "../StarRating/StarRating"

function Summary(props) {
  return (
    <div className={`sectionSummary2 ${styles.sectionSummary2}`}>
      <div className={`sectionSummaryTable2 ${styles.sectionSummaryTable2}`}>
        <div className={`sectionSummaryInline2 ${styles.sectionSummaryInline2}`}>
          <Histogram histogramClick={props.histogramClick} total={props.total} reviewCounts={props.reviewCounts} />
          <div className={`secondaryRatingSummaryBlock2 ${styles.secondaryRatingSummaryBlock2}`}>
            <div className={`secondaryRatingSummaryHeader2 ${styles.secondaryRatingSummaryHeader2}`}>
              <h3 className={`contentTitle2 ${styles.contentTitle2}`}>
                Average Customer Ratings
              </h3>
            </div>
            <div className={`secondaryRatingSummaryList2 table2 ${styles.secondaryRatingSummaryList2, styles.table2}`}>
              <div className={`secondaryRatingSummaryStars2 tableRow2 ${styles.secondaryRatingSummaryStars2, styles.tableRow2}`}>
                <div className={`secondaryRatingSummaryId2 ${styles.secondaryRatingSummaryId2}`}>Overall</div>
                <span className={`tableCell2 ${styles.tableCell2}`}>
                  <StarRating ratio={props.ratio} />
                </span>
                <span className={`secondaryRatingSummaryRating2 tableCell2 ${styles.secondaryRatingSummaryRating2, styles.tableCell2}`}>
                  {props.ratio}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
