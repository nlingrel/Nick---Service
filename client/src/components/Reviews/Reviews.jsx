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
      page: 1,
      pages: 1,
      reviews: [],
      overall: 5,
      mounted: false
    };
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.histogramClick = this.histogramClick.bind(this)
  }

  componentDidMount() {

    window.fetch(`http://localhost:8084/reviews?productID=${this.state.product}&page=${this.state.page}&overall=${this.state.overall}}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        this.setState({
          reviews: result.docs,
          page: result.page,
          pages: result.pages,
          total: result.total,
          mounted: true,
          reviewCountByRating: result.reviewCountByRating

        });
      },
        error => {
          this.setState({
            error
          });
        }
      )
  }
  getPage(page, overall = this.state.overall) {
    window.fetch(`http://localhost:8084/reviews?productID=${this.state.product}&page=${page}&overall=${overall}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        this.setState({
          reviews: result.docs,
          page: result.page,
          pages: result.pages,
          total: result.total,
          mounted: true
        });
      },
        error => {
          this.setState({
            error
          });
        }
      )
  }
  nextPage(event) {
    event.preventDefault()
    console.log('Should go to next page')
    if (this.state.page < this.state.pages) {
      this.getPage(this.state.page + 1)

    }
  }

  histogramClick(star) {
    event.preventDefault()
    if (star !== this.state.overall) {
      this.getPage(1, star)
      this.setState({
        overall: star
      })

    }

  }

  previousPage(event) {
    event.preventDefault()
    console.log('Should go to previous page')
    if (this.state.page > 1) {
      this.getPage(this.state.page - 1)
    }
  }

  render() {

    const { error, mounted } = this.state;

    if (error) {
      return <div>Error</div>;
    } else if (!mounted) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="tabReviews">
          <div className={`contentSearch2 ${styles.contentSearch2}`}>
            <Masthead ratio={this.state.ratio} total={this.state.total} plural={this.state.plural} />
          </div>
          <div className={`$ contentListContainer2 ${styles.contentListContainer2}`}>
            <Header histogramClick={this.histogramClick} previousPage={this.previousPage} nextPage={this.nextPage} ratio={this.state.ratio} page={this.state.page} pages={this.state.pages} total={this.state.reviewCountByRating.total} reviewCounts={this.state.reviewCountByRating} />
          </div>
          <ReviewList reviews={this.state.reviews} />
          <div className={`contentPagination2 ${styles.contentPagination2}`}>
            <ControlBar previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page} pages={this.state.pages} total={this.state.total} />
          </div>
        </div>
      )

    }

  }

}

export default Reviews
