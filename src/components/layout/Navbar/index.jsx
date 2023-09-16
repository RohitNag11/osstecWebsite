"use client";

import styles from './Navbar.module.scss';
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { pagesData } from '../../../../data/pagesData';
import MenuToggle from './MenuToggle';
import NavItem from './NavItem';
import Logo from './Logo';

export default function Navbar() {

    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(true);
    const toggleMenu = () => {
        setCollapsed(previousState => {
            return !previousState
        });
    }

    return (
        <div className={styles.navWrapper}>
            <nav
                className={[styles.navContainer,
                collapsed ? styles.collapsed : styles.expanded].join(' ')}>
                <div className={styles.nav}>
                    <div className={styles.menuToggleContainer}>
                        <MenuToggle onclick_event={toggleMenu} expanded={!collapsed} />
                    </div>

                    <Logo />

                    <div className={styles.navItems}>
                        {pagesData.map((page) => {
                            return (
                                <div key={page.title} onClick={toggleMenu}>
                                    <NavItem
                                        link={page.link}
                                        title={page.title}
                                        // hiddenInMobile={page.link == '/'}
                                        active={pathname == page.link}
                                        subpages={page.subpages}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
}