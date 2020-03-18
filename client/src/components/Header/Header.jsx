import React from "react"
import styles from "./styles.css"
import ActionBar from "../ActionBar/ActionBar"
import Summary from "../Summary/Summary"

function Header(props) {
  return (
    <div className={`header2 ${styles.header2}`}>
      <ActionBar />
      <Summary ratio={props.ratio} ratioCount={props.ratioCount} reviewCounts={props.reviewCounts} />
    </div>
  )
}

export default Header
