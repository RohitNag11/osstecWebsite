'use client'

import { useState } from 'react'
import styles from './TagButton.module.scss'

export default function TagButton({ active = false,
    color = 'var(--color-accent-primary)', children, clickable, ...props }) {
    const [hover, setHover] = useState(false)

    const style = {
        backgroundColor: hover || active ? color : 'transparent',
        borderColor: color,
        cursor: clickable ? 'pointer' : 'default',
        // color: hover ? 'white' : color,
        // boxShadow: hover || active ? `0 0 0.3rem ${color}` : 'none',
    }

    return (
        <div
            className={styles.tagButton}
            style={style}
            onMouseEnter={() => clickable && setHover(true)}
            onMouseLeave={() => clickable && setHover(false)}
            {...props}
        >
            {children}
        </div>
    )
}