import React from "react"
import styles from "./styles.css"
import { render } from "react-dom"

function Summary(props) {
  return (
    <div className={`sectionSummary2 ${styles.sectionSummary2}`}>
      <div className={`sectionSummaryTable`}>
        <div className={`sectionSummaryInline`}></div>
      </div>
    </div>
  )
}

export default Summary
