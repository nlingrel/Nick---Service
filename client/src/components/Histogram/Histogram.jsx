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
          <HistogramLine reviewCounts={props.reviewCounts[5]} total={props.total} histogramClick={props.histogramClick} star={5} />
          <HistogramLine reviewCounts={props.reviewCounts[4]} total={props.total} histogramClick={props.histogramClick} star={4} />
          <HistogramLine reviewCounts={props.reviewCounts[3]} total={props.total} histogramClick={props.histogramClick} star={3} />
          <HistogramLine reviewCounts={props.reviewCounts[2]} total={props.total} histogramClick={props.histogramClick} star={2} />
          <HistogramLine reviewCounts={props.reviewCounts[1]} total={props.total} histogramClick={props.histogramClick} star={1} />
        </div>
      </div>
    </div>
  );
}

export default Histogram
