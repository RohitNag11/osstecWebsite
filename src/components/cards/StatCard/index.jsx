import styles from './StatCard.module.scss';

export default function StatCard({ value, unit, description, ...props }) {
    return (
        <div className={styles.statCard}>
            <div className={styles.value}>
                {unit}{value}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}