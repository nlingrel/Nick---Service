import React from "react"
import Masthead from "../Masthead/Masthead"
import Header from "../Header/Header"
import styles from "./styles.css"
import ReviewList from "../ReviewList/ReviewList";
import ControlBar from "../ControlBar/ControlBar";
import axios from "axios"


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratio: 3.2,
      ratioCount: 55,
      reviewCountByRating: {
        "5": { star: 5, count: 12 },
        "4": { star: 4, count: 34 },
        "3": { star: 3, count: 5 },
        "2": { star: 2, count: 1 },
        "1": { star: 1, count: 7 },
      },

      plural: {
        true: 'Reviews',
        false: 'Review'
      },
      product: '0209688726',
      reviews: []
    };
  }

  componentDidMount() {
    //let id = 0857339583;
    const params = { productID: this.state.product }
    console.log('request query ', params)
    window.fetch(`http://localhost:8084/reviews?productID=${encodeURIComponent(params.productID)}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            reviews: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <div id="tabReviews">
        <div className={`contentSearch2 ${styles.contentSearch2}`}>
          <Masthead ratio={this.state.ratio} ratioCount={this.state.ratioCount} plural={this.state.plural} />
        </div>
        <div className={`$ contentListContainer2 ${styles.contentListContainer2}`}>
          <Header ratio={this.state.ratio} ratioCount={this.state.ratioCount} reviewCounts={this.state.reviewCountByRating} />
        </div>
        <ReviewList reviews={this.state.reviews} />
        <div className={`contentPagination2 ${styles.contentPagination2}`}>
          <ControlBar ratioCount={this.state.ratioCount} />
        </div>
      </div>
    )
  }
}

export default Reviews
