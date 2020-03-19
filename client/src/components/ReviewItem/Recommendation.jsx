import React from "react"
import styles from "./styles.css"

function Recommendation(props) {
    return (
        <dl className={`contentDataRecommendYes2 ${styles.contentDataRecommendYes2}`}>
            <dt className={`contentDataLabelContainer2 ${styles.contentDataLabelContainer2}`}>
                <span className={`contentDataIcon2 ${styles.contentDataIcon2}`}>
                    ✔
                </span>
                <span className={`contentDataLabel2 ${styles.contentDataLabel2}`}>
                    Yes
                </span>
                {", "}
            </dt>
            <dd className={`contentDataValue2 ${styles.contentDataValue2}`}>
                I recommend this product
            </dd>
        </dl>
    )
}

export default Recommendation