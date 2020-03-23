import React from "react"
import styles from "./styles.css"
import Recommendation from "./Recommendation"
import ReviewImage from "./ReviewImage"

function ContentDetails(props) {
    return (
        <div className={`contentDetailsOffset2 ${styles.contentDetailsOffset2}`}>
            <div className={`contentSummary2 ${styles.contentSummary2}`}>
                <div className={`contentSummaryBody2 ${styles.contentSummaryBody2}`}>
                    <div className={`contentSummaryBodyText2 ${styles.contentSummaryBodyText2}`}>
                        <p> {props.reviewText}</p>
                    </div>
                    <div className={`contentData2 ${styles.contentData2}`}>
                        <div className={`contentProductQuestions2${styles.contentProductQuestions2}`}>
                            <dl className={`contentDataProductQuestions2 ${styles.contentDataProductQuestions2}`}>
                                <dt className={`contentDataLabelContainer2 ${styles.contentDataLabelContainer2}`}>
                                    <span className={`contentDataLabel2 ${styles.contentDataLabel2}`}>
                                        What ship do ye cap'n?
                                  </span>
                                </dt>
                                <dd className={`contentDataValue2 ${styles.contentDataValue2}`}>
                                    2007 Lorem Ipsum Toyota yaris
                                </dd>
                            </dl>
                        </div>
                        <div className={`contentTagDimensions2 ${styles.contentTagDimensions2}`}></div>
                        <Recommendation overall={props.overall} />
                        <ul className={`contentMediaContainer2 ${styles.contentMediaContainer2}`}>
                            {props.images.length > 0 ? props.images.map((item, index) => {
                                return <ReviewImage key={index} image={item} />
                            }) : ''}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentDetails

