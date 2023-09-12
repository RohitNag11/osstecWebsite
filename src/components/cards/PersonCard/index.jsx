import styles from './PersonCard.module.scss'
import { CoverImage } from '@/components/imageComponents';
import { PiArrowsOutBold } from 'react-icons/pi';

export default function PersonCard({ mobile, name, position, shortSummary, longSummary, linkedin, image, ...props }) {
    return (
        <div className={styles.personCard}>
            <div className={styles.imageContainer} {...props}>
                {image && <CoverImage src={image} alt={name} />}
                {!mobile && <div className={styles.summary}>
                    {shortSummary}
                </div>}
                <div className={styles.openPopUpButton}>
                    <div className={styles.text}>read more</div>
                    <div className={styles.arrow}><PiArrowsOutBold /></div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.name}>{name}</div>
                <div className={styles.position}>{position}</div>
                <a href={linkedin} target='_blank' className={styles.linkedinLink}>
                    <div className={styles.linkedInText}>LinkedIn</div>
                </a>
            </div>
        </div>
    )
}