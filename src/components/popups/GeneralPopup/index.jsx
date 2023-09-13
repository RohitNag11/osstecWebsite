'use client'

import { useState, useEffect } from 'react';
import styles from './GeneralPopup.module.scss';
import { PiXBold } from 'react-icons/pi';

export function GeneralPopup({ isOpen, onClose, children }) {

    const [closeHovered, setCloseHovered] = useState(false);

    if (typeof window === "object") {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }

    if (!isOpen) return null;

    const handleClose = () => {
        setCloseHovered(false);
        onClose();
    }

    return (
        <div
            className={[styles.overlay, isOpen ? styles.open : styles.close].join(' ')}
            style={{
                backgroundColor: closeHovered ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.7)',
            }}
        >
            <div
                className={styles.popupContent}
                style={{
                    scale: closeHovered ? '0.99' : '1',
                    filter: closeHovered ? 'grayscale(1)' : 'grayscale(0)',
                }}
            >
                {children}
                <div
                    className={styles.closeButton}
                    onClick={handleClose}
                    onMouseEnter={() => setCloseHovered(true)}
                    onMouseLeave={() => setCloseHovered(false)}
                >
                    <PiXBold />
                </div>
            </div>
        </div>
    )
}