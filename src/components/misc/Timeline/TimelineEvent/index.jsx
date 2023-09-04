'use client'

import styles from './TimelineEvent.module.scss';
import { useEffect, useState, useRef } from 'react';

export function TimelineEvent({ currentYear, setCurrentYear, stickyYearRef, index, event, ...props }) {
    const [isActive, setIsActive] = useState(false);
    const [isPassed, setIsPassed] = useState(false);
    const eventDotRef = useRef(null);

    useEffect(() => {
        const checkIntersection = () => {
            if (stickyYearRef.current && eventDotRef.current) {
                const stickyRect = stickyYearRef.current.getBoundingClientRect();
                const eventDotRect = eventDotRef.current.getBoundingClientRect();

                const stickyMid = 0.5 * (stickyRect.top + stickyRect.bottom);
                const passed = (stickyMid >= eventDotRect.top);
                setIsPassed(passed);
                passed && setCurrentYear(event.year);
                const active = passed && (event.year === currentYear);
                setIsActive(active);
            }
        };

        window.addEventListener('scroll', checkIntersection);

        return () => {
            window.removeEventListener('scroll', checkIntersection);
        }
    }, [stickyYearRef, currentYear, setCurrentYear, event.year]);

    return (
        <div
            data-year={event.year}
            className={[
                styles.event,
                event.type === 'funding' ? styles.left : styles.right,
                isPassed && styles.passed,
                isActive && styles.active,
            ].join(' ')}
            {...props}
        >
            <div className={styles.year}>{event.year}</div>
            <div className={styles.title}>{event.title}</div>
            <div className={styles.description}>{event.description}</div>
            {event.type === 'milestone' && event.complete &&
                <div className={[styles.tag, styles.complete].join(' ')}>complete</div>
            }
            {event.type === 'funding' && event.complete &&
                <div className={[styles.tag, styles.recieved].join(' ')}>recieved</div>
            }
            <div ref={eventDotRef} className={styles.eventDot} />
        </div>
    )
};