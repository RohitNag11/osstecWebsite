import styles from './PersonCard.module.scss'
import Image from 'next/image';

export default function PersonCard({ mobile, name, position, shortSummary, longSummary, linkedin, image, ...props }) {
    return (
        <div className={styles.personCard} {...props}>
            <div className={styles.imageContainer}>
                {image && <Image src={image} layout="fill" objectFit="cover" alt={name} />}
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