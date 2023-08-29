import styles from './SectionBadge.module.scss'

export default function SectionBadge({ children }) {
    return (
        <div className={styles.sectionBadge}>
            {children}
        </div>
    )
}