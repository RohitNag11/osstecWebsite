import Link from 'next/link'
import React from 'react'
import styles from './NavItem.module.scss'

function NavItem({ link, title, active, subActive, hiddenInMobile, subpages }) {
    return (
        <div
            className={[
                styles.navItemContainer,
                active && styles.active,
                subActive && styles.subActive,
                hiddenInMobile && styles.hiddenInMobile
            ].join(' ')}
        >
            <Link
                href={link}
                className={styles.navItem}
            >
                <div className={styles.text}>{title}</div>
            </Link>
            {subpages &&
                <div className={styles.subNavContainer}>
                    <div className={styles.subNav}>
                        <div className={styles.subItemBackground}></div>
                        {subpages.map((subpage, i) =>
                            <Link
                                key={i}
                                href={link + '/#' + subpage.id}
                                className={[
                                    styles.subItem,
                                ].join(' ')}
                            >
                                {subpage.title}
                            </Link>
                        )}

                    </div>
                </div>
            }
        </div>
    )
}

export default NavItem