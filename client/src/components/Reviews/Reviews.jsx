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
      ratio: 5.0,
      reviewCountByRating: {
        ratio: 0,
        total: 0,
        "5": { star: 5, count: 0 },
        "4": { star: 4, count: 0 },
        "3": { star: 3, count: 0 },
        "2": { star: 2, count: 0 },
        "1": { star: 1, count: 0 },
      },

      plural: {
        true: 'Reviews',
        false: 'Review'
      },
      products: { 1: 'B00004RB1U', 2: 'B00002N57X', 3: 'B00000J421', 4: 'B00002243Z', 5: 'B0000223J1'},
      product: 'B00004RB1U',
      productID: 1,
      page: 1,
      pages: 1,
      reviews: [],
      overall: 6,
      mounted: false,
      filter: false,
      filterCount: 0
    };
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.histogramClick = this.histogramClick.bind(this)
    this.vote = this.vote.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.getPage = this.getPage.bind(this)
    this.getAllReviews = this.getAllReviews.bind(this)
  }

  componentDidMount() {
    this.updateProduct()
    
     
      this.getAllReviews()
    // window.fetch(`http://localhost:8084/reviews?productID=${this.state.product}&page=${this.state.page}&overall=${this.state.overall}`)
    //   .then(res => res.json())
    //   .then((result) => {
    //     console.log(result)
    //     this.setState({
    //       reviews: result.docs,
    //       page: result.page,
    //       pages: result.pages,
    //       total: result.total,
    //       filterCount: result.total,
    //       mounted: true,
    //       ratio: result.reviewCountByRating.ratio,
    //       reviewCountByRating: result.reviewCountByRating
    //     })
    //   },
    //     error => {
    //       this.setState({
    //         error
    //       });
    //     }
    //   )
      
  }
  
  getAllReviews(){
    window.fetch(`http://localhost:8084/reviews?productID=${this.state.product}&page=${this.state.page}&overall=${this.state.overall}`)
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      this.setState({
        reviews: result.docs,
        page: result.page,
        pages: result.pages,
        total: result.total,
        filterCount: result.total,
        mounted: true,
        ratio: result.reviewCountByRating.ratio,
        reviewCountByRating: result.reviewCountByRating
      })
    },
      error => {
        this.setState({
          error
        });
      }
    )
  }

  updateProduct(){
    const products = this.state.products;
    var nickId = localStorage.getItem('productID');
    console.log('nickID====', nickId)
    console.log('productID in state===', this.state.productID)
      if (nickId > 5){
        nickId = 5;
      }
      if(nickId !== this.state.productID){
        this.setState({
          productID: nickId,
          product: products[nickId],
          overall: 6
        })
        this.getAllReviews()
      }
      setInterval( ()=>{
    
        this.updateProduct()}
        ,1000)
    }
   
     
  

  getPage(page, overall = this.state.overall) {
    window.fetch(`http://localhost:8084/reviews?productID=${this.state.product}&page=${page}&overall=${overall}`)
      .then(res => res.json())
      .then((result) => {
        // console.log(result)
        this.setState({
          reviews: result.docs,
          page: result.page,
          pages: result.pages,
          filterCount: result.total,
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
    // console.log('Should go to next page')
    if (this.state.page < this.state.pages) {
      this.getPage(this.state.page + 1)

    }
  }

  histogramClick(star) {
    event.preventDefault()
    if (star !== this.state.overall) {
      this.getPage(1, star)
      this.setState({
        overall: star,
        filter: true,
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
  
  vote(event){
    // event.preventDefault(); 
    // axios.post(`http://localhost:8084/reviews/review`,{
    //     _id: `5e7fbce1ffb9ae534c54d5e0`,
    //     yes: true,
    //     no: false,
    //     vote: 0
    //   })
    // .then(res =>{
    //   console.log('this is the response from post', res)
    // })
    // .catch(err => {
    //   console.log('this is the error from post', err)
    // })
    
    
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
            <Header histogramClick={this.histogramClick} previousPage={this.previousPage} nextPage={this.nextPage} ratio={this.state.ratio} page={this.state.page} pages={this.state.pages} total={this.state.total} reviewCounts={this.state.reviewCountByRating} filterCount={this.state.filterCount} />
          </div>
            <ReviewList reviews={this.state.reviews} vote={this.vote}/>
          <div className={`contentPagination2 ${styles.contentPagination2}`}>
            <ControlBar previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page} pages={this.state.pages} filterCount={this.state.filterCount} />
          </div>
        </div>
      )

    }

  }

}

export default Reviews
