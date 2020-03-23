import React from "react"
import styles from "./styles.css"
import StarRating from "../StarRating/StarRating"
import Badge from "./Badge"
import ContentDetails from "./ContentDetails"
import FeedbackVote from "../FeedbackVote/FeedbackVote"

function AuthorProfileOffset(props) {
    return (
        <div className={`contentItemAuthorProfileOffset2 ${styles.contentItemAuthorProfileOffset2}`}>
            <div className={`contentContainer2 ${styles.contentContainer2}`}>
                <div className={`contentCore2 ${styles.contentCore2}`}>
                    <div className={`contentHeader2 ${styles.contentHeader2}`}>
                        <div className={`contentDataSummary2 ${styles.contentDataSummary2}`}>
                            <div className={`contentBadgesContainer2 ${styles.contentBadgesContainer2}`}>
                                {props.review.sweepstakes ? <Badge badges={props.badges.sweepstakes} /> : ''}
                                {props.review.verified ? <Badge badges={props.badges.verified} /> : ''}
                            </div>
                            <div className={`contentHeaderMeta2 ${styles.contentHeaderMeta2}`}>
                                <span>
                                    <StarRating ratio={props.ratio} />
                                </span>
                                <div className={`contentMetaWrapper2 ${styles.contentMetaWrapper2}`}>
                                    <div className={`contentMeta2 ${styles.contentMeta2}`}>
                                        <div className={`contentReferenceData2 ${styles.contentReferenceData2}`}>
                                            <div className={`contentDatetime2 ${styles.contentDatetime2}`}>
                                                <span className={`contentDateTimeDot2 ${styles.contentDateTimeDot2}`}>
                                                    ·
                                            </span>
                                                <span className={`contentDateTimeStamp2 ${styles.contentDateTimeStamp2}`}>
                                                    2 hours ago &nbsp;
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`contentTitleContainer2 ${styles.contentTitleContainer2}`}>
                                <h3 className={`contentTitle2 ${styles.contentTitle2}`}>
                                    {props.review.summary}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <ContentDetails reviewText={props.review.reviewText} images={props.review.image} overall={props.review.overall} />
                </div>
            </div>
            <div className={`contentActionsContainer2 ${styles.contentActionsContainer2}`}>
                <FeedbackVote />
            </div>
            <div className={`inlineFormContainer2 ${styles.inlineFormContainer2}`}></div>
            <div className={`scondaryContentList2 ${styles.scondaryContentList2}`}>

            </div>
        </div>
    )
}

export default AuthorProfileOffset