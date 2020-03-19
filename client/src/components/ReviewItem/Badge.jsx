import React from "react"
import styles from "./styles.css"

function Badge(props) {
    return (
        <dl className={`badgeSummary2 ${styles.badgeSummary2}`}>
            <dd className={`badgeContent2 ${styles.badgeContent2}`}>
                <span className={`badgeIcon2 ${styles.badgeIcon2}`}>
                    {props.badges.icon}
                </span>
                <span className={`badgeLabel2 ${styles.badgeLabel2}`}>
                    {props.badges.label}
                </span>
            </dd>

        </dl>
    );
}

export default Badge;