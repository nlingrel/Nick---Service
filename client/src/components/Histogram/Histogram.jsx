import React from "react"
import styles from "./styles.css"
import HistogramLine from "./HistogramLine"

function Histogram(props) {
  return (
    <div className={`inlineHistogram2 ${styles.inlineHistogram2}`}>
      <div className={`inlineHistogramRatings2 ${styles.inlineHistogramRatings2}`}>
        <div className={`inlineHistogramHeader2 ${styles.inlineHistogramHeader2}`}>
          <h3 className={`contentTitle2 ${styles.contentTitle2}`}>Rating Snapshot</h3>
        </div>
        <p className={`histogramFilterHelper2 ${styles.histogramFilterHelper2}`}>Select a row below to filter reviews.</p>
        <div className={`flexContainerColumn2 ${styles.flexContainerColumn2}`}>
          <HistogramLine reviewCounts={props.reviewCounts[5]} ratioCount={props.ratioCount} />
          <HistogramLine reviewCounts={props.reviewCounts[4]} ratioCount={props.ratioCount} />
          <HistogramLine reviewCounts={props.reviewCounts[3]} ratioCount={props.ratioCount} />
          <HistogramLine reviewCounts={props.reviewCounts[2]} ratioCount={props.ratioCount} />
          <HistogramLine reviewCounts={props.reviewCounts[1]} ratioCount={props.ratioCount} />
        </div>
      </div>
    </div>
  );
}

export default Histogram
