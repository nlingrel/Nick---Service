import React from "react"
import styles from "./styles.css"
import ActionBar from "../ActionBar/ActionBar"
import Summary from "../Summary/Summary"
import ControlBar from "../ControlBar/ControlBar"

function Header(props) {
  return (
    <div className={`header2 ${styles.header2}`}>
      <ActionBar />
      <Summary ratio={props.ratio} ratioCount={props.ratioCount} reviewCounts={props.reviewCounts} />
      <ControlBar ratioCount={props.ratioCount} />
    </div>
  )
}

export default Header
