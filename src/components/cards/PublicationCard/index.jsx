import styles from './PublicationCard.module.scss'
import { PiArrowSquareOutBold, PiArrowDownBold } from 'react-icons/pi';

export default function PublicationCard({ title, authors, date, onlineLinks, ...props }) {
    const dateString = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });
    return (
        <a
            target='_blank'
            href={onlineLinks[0]}
            className={styles.publicationCard}
            {...props}
        >
            <div className={styles.left}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{dateString}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.icon}>
                    <PiArrowSquareOutBold />
                </div>
            </div>
        </a>
    )
}