import styles from './UpdateCard.module.scss';
import { CoverImage } from '@/components/imageComponents';
import { PiArrowSquareOutBold, PiSparkleFill } from 'react-icons/pi';

function UpdateCardContent({ title, date, description, type, tags, image = null, link = null, featured = false, ...props }) {
    const dateString = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });
    return (
        <>
            {image && <div className={styles.imageContainer}>
                <div className={styles.tags}>
                    {tags.map(tag => <div key={tag} className={styles.tag}>{tag}</div>)}
                </div>
                <CoverImage src={image} alt={title} />
            </div>}
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <div className={styles.date}>{dateString}</div>
                        {type && <div className={styles.type}>{type}</div>}
                        {featured && <div className={styles.featured}>
                            <PiSparkleFill />
                            latest
                        </div>}
                    </div>
                    <div className={styles.right}>
                        {link && <div className={styles.link}>
                            <div className={styles.text}>read more</div>
                            <div className={styles.arrow}>
                                <PiArrowSquareOutBold />
                            </div>
                        </div>}
                    </div>
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </>
    )
}

export default function UpdateCard({ title, date, description, type, tags, image = null, link = null, featured = false, ...props }) {
    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                className={[styles.updateCard, styles.linkCard].join(' ')}
            >
                <UpdateCardContent
                    title={title}
                    date={date}
                    description={description}
                    type={type}
                    tags={tags}
                    image={image}
                    link={link}
                    featured={featured}
                />
            </a>
        )
    } else {
        return (
            <div className={styles.updateCard}>
                <UpdateCardContent
                    title={title}
                    date={date}
                    description={description}
                    type={type}
                    tags={tags}
                    image={image}
                    featured={featured}
                />
            </div>
        )
    }
}