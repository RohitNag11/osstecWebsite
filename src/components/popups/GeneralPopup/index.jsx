'use client'

import { useState, useEffect } from 'react';
import styles from './GeneralPopup.module.scss';

export function GeneralPopup({ isOpen, onClose, children }) {
    if (isOpen) {
        // Prevent background scrolling
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'unset';
    }

    if (!isOpen) return null;

    return (
        <div className={[styles.overlay, isOpen ? styles.open : styles.close].join(' ')} >
            <div className={styles.popupContent}>
                {children}
                <div className={styles.closeButton} onClick={onClose}>
                    &#9587;
                </div>
            </div>
        </div>
    )
}