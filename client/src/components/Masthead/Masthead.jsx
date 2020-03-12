import React from 'react'
import styles from './styles.css'
import Stars from '../Stars/Stars.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'

function Masthead (props) {
  return(

      <div className = {`masthead ${styles.masthead}`}>
          <div className = {`summaryBar ${styles.summaryBar}`}>
              <Stars />
          </div>
          <div>
              <SearchBar />
          </div>
      </div>
  )
  
}

export default Masthead;