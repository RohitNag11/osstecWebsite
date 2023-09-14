import styles from './SectionBadge.module.scss'

export default function SectionBadge({ children, ...props }) {
    return (
        <div className={styles.sectionBadge} {...props}>
            {children}
        </div>
    )
}