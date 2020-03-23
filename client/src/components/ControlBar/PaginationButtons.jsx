import React from "react"
import styles from "./styles.css"

function PaginationButtons(props) {
    return (
        <ul className={`contentPaginationButtons2 ${styles.contentPaginationButtons2}`}>
            <li className={`contentPaginationButtonsItemPrevious2 ${styles.contentPaginationButtonsItemPrevious2}`}>
                <button className={`contentButtonPagesFirst2 ${styles.contentButtonPagesFirst2}`}
                    type="button"
                    onClick={props.previousPage}
                >
                    <span className={`contentButtonPagesPrev2 ${styles.contentButtonPagesPrev2}`}>
                        ◄
                    </span>
                </button>
            </li>
            <li className={`contentPaginationButtonsItemNext2 ${styles.contentPaginationButtonsItemNext2}`}>
                <button className={`contentButtonPagesLast2 ${styles.contentButtonPagesLast2}`}
                    type="button"
                    onClick={props.nextPage}
                >
                    <span className={`contentButtonPagesNext2 ${styles.contentButtonPagesNext2}`}>
                        ►
                    </span>
                </button>
            </li>
        </ul>
    )
}

export default PaginationButtons

