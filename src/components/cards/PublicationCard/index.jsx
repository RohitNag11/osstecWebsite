import React, { useState } from 'react';
import styles from './PublicationCard.module.scss'
import { PiArrowSquareOutBold, PiCaretDownBold } from 'react-icons/pi';

function MainContent({ title, authors, date, onlineLinks, expandable, isExpanded, ...props }) {
    const dateString = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });

    return (
        <>
            <div className={styles.left}>
                <div className={styles.leftHeader}>
                    <div className={styles.date}>{dateString}</div>
                    {expandable && <div className={styles.type}>multiple papers</div>}
                </div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.right}>
                <div className={[styles.icon, isExpanded && styles.expanded].join(' ')}>
                    {expandable ? <PiCaretDownBold /> : <PiArrowSquareOutBold />}
                </div>
            </div>
        </>
    )
}

export default function PublicationCard({ title, authors, date, onlineLinks, ...props }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.publicationCard} {...props}>
            {onlineLinks.length > 1 ?
                <div className={styles.main} onClick={() => setIsExpanded(!isExpanded)}>
                    <MainContent
                        title={title}
                        authors={authors}
                        date={date}
                        onlineLinks={onlineLinks}
                        expandable
                        isExpanded={isExpanded}
                    />
                </div>
                :
                <a href={onlineLinks[0]} target='_blank' className={styles.main}>
                    <MainContent
                        title={title}
                        authors={authors}
                        date={date}
                        onlineLinks={onlineLinks}
                        expandable={false}
                        isExpanded={false}
                    />
                </a>
            }
            {isExpanded &&
                <div className={[styles.extraLinks].join(' ')}>
                    {onlineLinks.map((link, i) =>
                        <a
                            key={link}
                            href={link}
                            target='_blank'
                            className={styles.link}>
                            Paper {i + 1} <PiArrowSquareOutBold />
                        </a>
                    )}
                </div>
            }

        </div>
    )
}