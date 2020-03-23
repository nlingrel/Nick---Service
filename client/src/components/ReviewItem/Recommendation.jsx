import React from "react"
import styles from "./styles.css"

function Recommendation(props) {
    return (
        <dl className={`contentDataRecommendYes2 ${styles.contentDataRecommendYes2}`}>
            <dt className={`contentDataLabelContainer2 ${styles.contentDataLabelContainer2}`}>
                <span className={`contentDataIcon2 ${styles.contentDataIcon2}`}>
                    {props.overall < 4 ? '✘' : '✔'}
                </span>
                <span className={`contentDataLabel2 ${styles.contentDataLabel2}`}>
                    {props.overall < 4 ? 'Nay' : 'Aye'}
                </span>
                {", "}
            </dt>
            <dd className={`contentDataValue2 ${styles.contentDataValue2}`}>
                I {props.overall < 3 ? "d' nay" : ''} recommend this product
            </dd>
        </dl>
    )
}

export default Recommendation