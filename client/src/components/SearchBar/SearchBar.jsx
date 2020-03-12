import React from 'react'
import styles from './styles.css'

class SearchBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            text : ''
        }
    }

    render () {
        return (
            <div className={`searchBar ${styles.searchBar}`}>
                <div className= {`searchBarSubmission ${styles.searchBarSubmission}`}>
                  <input 
                    className= {`searchText ${styles.searchText}`}
                    type="text" 
                    name="search" 
                    placeholder="Search topics and reviews">
                  </input>
                </div>
            </div>

        )
    }
}

export default SearchBar