import Link from 'next/link'
import React from 'react'
import styles from './NavItem.module.scss'

function NavItem({ link, title, active, subActive, hiddenInMobile }) {
    return (
        <Link
            href={link}
            className={[
                styles.navItem,
                active && styles.active,
                subActive && styles.subActive,
                hiddenInMobile && styles.hiddenInMobile
            ].join(' ')}
        >
            <div className={styles.text}>{title}</div>
        </Link>
    )
}

export default NavItem