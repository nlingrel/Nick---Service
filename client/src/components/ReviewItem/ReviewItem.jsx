import React from "react"
import styles from "./styles.css"
import AuthorProfile from "./AuthorProfile"
import AuthorProfileOffset from "./AuthorProfileOffset"


class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yes: 0,
            no: 0,
            author: this.props.review.reviewerID,
            authorCount: 0,
            badges: {
                sweepstakes: {
                    icon: '†',
                    label: 'Sweepstakes Entry'
                },
                verified: {
                    icon: '☠',
                    label: 'Verified Purchaser'
                },
                review: this.props.review
            }
        }
    }
    componentDidMount(){
      //   window.fetch(`http://localhost:8084/reviewer?reviewer=${this.state.author}`)
      // .then(res => {
      //   res.json()
      //   })
      // .then((result) => {
      //   console.log('result', result)
      //   this.setState({
      //     authorCount : result
      //   });
      // },
      //   error => {
      //     this.setState({
      //       error
      //     });
      //   }
      // )
    }


    render() {
        return (
            <li className={`reviewContentItem2 ${styles.reviewContentItem2}`}>
                <AuthorProfile review={this.props.review} />
                <AuthorProfileOffset badges={this.state.badges} ratio={this.props.review.overall} review={this.props.review} vote={this.props.vote} />
            </li>
        );

    }

}

export default ReviewItem