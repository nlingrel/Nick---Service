import React from "react"
import styles from "./styles.css"

function ReviewImage(props) {

    return (
        <li className={`mediaItemPhoto2 ${styles.mediaItemPhoto2}`}>
            <img src={props.image} />
        </li>
    )
}

export default ReviewImage