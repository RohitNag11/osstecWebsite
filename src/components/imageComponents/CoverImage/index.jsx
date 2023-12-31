'use client'
import styles from './CoverImage.module.scss'
import Image from "next/image";
import { useState } from "react";

export function CoverImage({
    src,
    alt,
    shimmerPlaceholder = true,
    placeholderColor = '#222F4165',
    borderRadius = 'var(--radius-extra-large)',
    objectFit = 'cover',
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={styles.coverImage} style={{ borderRadius: borderRadius }}>
            {!loaded && shimmerPlaceholder && (
                <div className={styles.shimmer}></div>
            )}
            {!loaded && (
                <div className={styles.staticPlaceholder} style={{ backgroundColor: placeholderColor }}></div>
            )}
            <Image
                src={src}
                fill
                objectFit={objectFit}
                alt={alt}
                onLoad={() => setLoaded(true)}
                key={src}
            />
        </div>
    );
}