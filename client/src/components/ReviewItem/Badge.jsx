import React from "react"
import styles from "./styles.css"

function Badge(props) {
    return (
        <dl className={`badgeSummary2 ${styles.badgeSummary2}`}>
            <dd>
                <span>
                    {props.badges.icon}
                </span>
                <span>
                    {props.badges.label}
                </span>
            </dd>

        </dl>
    );
}

export default Badge;