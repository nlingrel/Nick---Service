import React from "react";
import styles from "./styles.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div className={`searchBarSubmission2 ${styles.searchBarSubmission2}`}>
        <span className={`searchControlIcon ${styles.searchControlIcon}`}>

        </span>
        <input
          className={`searchText2 ${styles.searchText2}`}
          type="text"
          name="search"
          placeholder="Search topics and reviews"
        ></input>
        <button
          type="button"
          className={`searchButton2 ${styles.searchButton2}`}
        >
          <span
            className={`searchControlIcon2 ${styles.searchControlIcon2}`}
            aria-hidden="true"
          >
            ϙ
          </span>
        </button>
      </div>
    );
  }
}

export default SearchBar;
