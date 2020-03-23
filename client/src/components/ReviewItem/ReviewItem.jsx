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
            badges: {
                sweepstakes: {
                    icon: '⊞',
                    label: 'Sweepstakes Entry'
                },
                verified: {
                    icon: '*',
                    label: 'Verified Purchaser'
                },
                review: this.props.review
            }
        }
    }


    render() {
        return (
            <li className={`reviewContentItem2 ${styles.reviewContentItem2}`}>
                <AuthorProfile review={this.props.review} />
                <AuthorProfileOffset badges={this.state.badges} ratio={this.props.review.overall} review={this.props.review} />
            </li>
        );

    }

}

export default ReviewItem