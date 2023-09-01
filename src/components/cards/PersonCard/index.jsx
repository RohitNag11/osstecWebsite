import styles from './PersonCard.module.scss'
import { CoverImage } from '@/components/imageComponents';

export default function PersonCard({ mobile, name, position, shortSummary, longSummary, linkedin, image, ...props }) {
    return (
        <div className={styles.personCard} {...props}>
            <div className={styles.imageContainer}>
                {image && <CoverImage src={image} alt={name} />}
                {!mobile && <div className={styles.summary}>
                    {shortSummary}
                </div>}
                <div className={styles.openPopUpButton}>
                    <div className={styles.text}>read more</div>
                    <div className={styles.arrow}>&rarr;</div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.name}>{name}</div>
                <div className={styles.position}>{position}</div>
            </div>
        </div>
    )
}