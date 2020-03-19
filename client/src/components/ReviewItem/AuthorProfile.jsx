import React from "react"
import styles from "./styles.css"

function AuthorProfile(props) {
    return (
        <div className={`authorProfile2 ${styles.authorProfile2}`}>
            <div className={`inlineProfile2 ${styles.inlineProfile2}`}>
                <div className={`authorAvatar2 ${styles.authorAvatar2}`}>
                    <div className={`authorAvatarNickname2 ${styles.authorAvatarNickname2}`}>
                        <div className={`contentAuthorName2 ${styles.contentAuthorName2}`}>
                            <button className={`author2 ${styles.author2}`} type="button">
                                <h3>Author's Name</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`userInfo2 ${styles.userInfo2}`}>
                    <div className={`authorUserstats2 ${styles.authorUserstats2}`}>
                        <ul className={`authorUserStatsList2 ${styles.authorUserStatsList2}`}>
                            <li className={`authorUserStatsReviews2 ${styles.authorUserStatsReviews2}`}>
                                <span className={`authorUserStatsData2 ${styles.authorUserStatsData2}`}>
                                    Review
                                        </span>
                                <span className={`${styles.authorUserStatsValue2}`}>
                                    1
                                        </span>
                            </li>
                            <li className={`authorUserStatesVotes2 ${styles.authorUserStatesVotes2}`}>
                                <span className={`authorUserStatsData2 ${styles.authorUserStatsData2}`}>
                                    Votes
                                        </span>
                                <span className={`authorUserStatsValue2 ${styles.authorUserStatsValue2}`}>
                                    5
                                        </span>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorProfile