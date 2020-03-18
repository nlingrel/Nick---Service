import React from "react"
import styles from "./styles.css"
import StarRating from "../StarRating/StarRating"
import Badge from "./Badge"


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
                }
            }
        }
    }


    render() {
        return (
            <li className={`reviewContentItem2 ${styles.reviewContentItem2}`}>
                <div className={`authorProfile2 ${styles.authorProfile2}`}>
                    <div className={`inlineProfile2 ${styles.inlineProfile2}`}>
                        <div className={`authorAvatar2 ${styles.authorAvatar2}`}>
                            <div className={`authorAvatarNickname2 ${styles.authorAvatarNickname2}`}>
                                <div className={`contentAuthorName2 ${styles.contentAuthorName2}`}>
                                    <button className={`author2 ${styles.author2}`} type="button">
                                        <h3>Author's Name</h3>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`userInfo2 ${styles.userInfo2}`}>
                            <div className={`authorUserstats2 ${styles.authorUserstats2}`}>
                                <ul className={`authorUserStatsList2 ${styles.authorUserStatsList2}`}>
                                    <li className={`authorUserStatsReviews2 ${styles.authorUserStatsReviews2}`}>
                                        <span className={`authorUserStatsData2 ${styles.authorUserStatsData2}`}>
                                            Review
                                        </span>
                                        <span className={`${styles.authorUserStatsValue2}`}>
                                            1
                                        </span>

                                    </li>
                                    <li className={`authorUserStatesVotes2 ${styles.authorUserStatesVotes2}`}>
                                        <span className={`authorUserStatsData2 ${styles.authorUserStatsData2}`}>
                                            Votes
                                        </span>
                                        <span className={`authorUserStatsValue2 ${styles.authorUserStatsValue2}`}>
                                            5
                                        </span>

                                    </li>

                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={`contentItemAuthorProfileOffset2 ${styles.contentItemAuthorProfileOffset2}`}>
                    <div className={`contentContainer2 ${styles.contentContainer2}`}>
                        <div className={`contentCore2 ${styles.contentCore2}`}>
                            <div className={`contentHeader2 ${styles.contentHeader2}`}>
                                <div className={`contentDataSummary2 ${styles.contentDataSummary2}`}>
                                    <div className={`contentBadgesContainer2 ${styles.contentBadgesContainer2}`}>
                                        <Badge badges={this.state.badges.sweepstakes} />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                {/* <StarRating ratio={props.rating} /> */}
            </li>
        );

    }

}

export default ReviewItem