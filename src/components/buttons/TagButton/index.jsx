'use client'

import { useState } from 'react'
import styles from './TagButton.module.scss'

export default function TagButton({ active = false,
    color = 'var(--color-accent-primary)', children, ...props }) {
    const [hover, setHover] = useState(false)

    const style = {
        backgroundColor: hover || active ? color : 'transparent',
        borderColor: color,
        // color: hover ? 'white' : color,
        // boxShadow: hover || active ? `0 0 0.3rem ${color}` : 'none',
    }

    return (
        <div
            className={styles.tagButton}
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            {children}
        </div>
    )
}