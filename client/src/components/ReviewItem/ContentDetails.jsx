import React from "react"
import styles from "./styles.css"
import Recommendation from "./Recommendation"

function ContentDetails(props) {
    return (
        <div className={`contentDetailsOffset2 ${styles.contentDetailsOffset2}`}>
            <div className={`contentSummary2 ${styles.contentSummary2}`}>
                <div className={`contentSummaryBody2 ${styles.contentSummaryBody2}`}>
                    <div className={`contentSummaryBodyText2 ${styles.contentSummaryBodyText2}`}>
                        <p> Lorem Ipsum Its for my Toyota yaris, reliable, last longer, really goo replacement Lorem Ipsum</p>
                    </div>
                    <div className={`contentData2 ${styles.contentData2}`}>
                        <div className={`contentProductQuestions2${styles.contentProductQuestions2}`}>
                            <dl className={`contentDataProductQuestions2 ${styles.contentDataProductQuestions2}`}>
                                <dt className={`contentDataLabelContainer2 ${styles.contentDataLabelContainer2}`}>
                                    <span className={`contentDataLabel2 ${styles.contentDataLabel2}`}>
                                        What kind of vehicle do you drive?
                                  </span>
                                </dt>
                                <dd className={`contentDataValue2 ${styles.contentDataValue2}`}>
                                    2007 Lorem Ipsum Toyota yaris
                                </dd>
                            </dl>
                        </div>
                        <div className={`contentTagDimensions2 ${styles.contentTagDimensions2}`}></div>
                        <Recommendation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentDetails