import styles from './MenuToggle.module.scss'

function MenuToggle({ onclick_event, expanded }) {
    return (
        <div className={[styles.menuToggle, expanded ? styles.expanded : ''].join(' ')} onClick={onclick_event}>
            <div className={styles.topBar} />
            <div className={styles.bottomBar} />
        </div>
    );
}

export default MenuToggle;