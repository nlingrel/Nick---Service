import React from "react"
import styles from "./styles.css"

function FeedbackVote(props) {


    return (
        <div className={`feedbackContainer2 ${styles.feedbackContainer2}`}>
            <div className={`contentFeedBackVote2 ${styles.contentFeedBackVote2}`}>
                <div className={`contentFeedBackVoteRequest2 ${styles.contentFeedBackVoteRequest2}`}>
                    <p>Helpful?</p>
                </div>
                <div className={`contentFeedbackButtonContainer2 ${styles.contentFeedbackButtonContainer2}`}>
                    <button className={`contentFeedbackButtonYes2 ${styles.contentFeedbackButtonYes2}`}
                        type="button"
                        label={`${0} people found this review helpful`}
                    >
                        <span>
                            Yes ·
                        <span className={`contentButtonCount2 ${styles.contentButtonCount2}`}>
                                {0}
                            </span>
                        </span>
                    </button>
                    <button className={`contentFeedbackButtonNo2 ${styles.contentFeedbackButtonNo2}`}
                        type="button"
                        label={`${0} people did not find this review helpful`}
                    >
                        <span>
                            No ·
                            <span className={`contentButtonCount2 ${styles.contentButtonCount2}`}>
                                {0}
                            </span>
                        </span>
                    </button>
                </div>
                <div className={`contentFeedBackVote2 ${styles.contentFeedBackVote2}`}>
                    <button className={`contentReportButton2 ${styles.contentReportButton2}`}>
                        Report
                    </button>
                </div>
            </div>
        </div>
    );


}

export default FeedbackVote