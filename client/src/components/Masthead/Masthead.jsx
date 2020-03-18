import React from "react"
import styles from "./styles.css"
import Stars from "../Stars/Stars.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"

function Masthead(props) {
  return (
    <div className={`masthead2 ${styles.masthead2}`}>
      <div className={`productSummaryBar2 ${styles.productSummaryBar2}`}>
        <Stars ratio={props.ratio} ratioCount={props.ratioCount} plural={props.plural} />
      </div>
      <div className={`searchBar2 ${styles.searchBar2}`}>
        <SearchBar />
      </div>
    </div>
  )
}

export default Masthead
