import styles from './PrimaryButton.module.scss'

export function PrimaryButton({ children, ...props }) {
    return (
        <div className={styles.primaryButton} {...props}>
            {children}
        </div>
    )
}