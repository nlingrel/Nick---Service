import React from "react"
import Masthead from "../Masthead/Masthead"
import Header from "../Header/Header"
import styles from "./styles.css"

class Reviews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="tabReviews">
        <div className={`contentSearch2 ${styles.contentSearch2}`}>
          <Masthead />
        </div>
        <div
          className={`$ contentListContainer2 ${styles.contentListContainer2}`}
        >
          <Header />
        </div>
      </div>
    )
  }
}

export default Reviews
