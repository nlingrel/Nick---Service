import React from "react"
import styles from "./styles.css"
import ReviewItem from "../ReviewItem/ReviewItem";

class ReviewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 5
        }

    }

    render() {
        const items = this.props.reviews.map((review) => {
            return <ReviewItem key={review._id} review={review} rating={review.overall} vote={this.props.vote}/>
        })
        return (
            <ol className={`contentListReviews2 ${styles.contentListReviews2}`}>
                {items}
            </ol>
        )
    }


}

export default ReviewList