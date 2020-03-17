import React from "react"
import styles from "./styles.css"
import ActionBar from "../ActionBar/ActionBar"
import Summary from "../Summary/Summary"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`header2 ${styles.header2}`}>
        <ActionBar />
        <Summary />
      </div>
    )
  }
}

export default Header
