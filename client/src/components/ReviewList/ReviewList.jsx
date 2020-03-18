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
        return (
            <div>
                ReviewList
                <ReviewItem rating={this.state.rating} />
            </div>
        )
    }


}

export default ReviewList