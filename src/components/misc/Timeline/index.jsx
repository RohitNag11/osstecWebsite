import { useState, useEffect, useRef } from 'react';
import styles from './Timeline.module.scss';
import { TimelineEvent } from './TimelineEvent';
import { SectionBadge } from '@/components/badges';

const Timeline = ({ events, name }) => {
    const [flash, setFlash] = useState(false);
    const [shouldTransition, setShouldTransition] = useState(false);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const timelineRef = useRef(null);
    const stickyYearRef = useRef(null);
    const [progressHeight, setProgressHeight] = useState(0);

    const updateProgressHeight = () => {
        if (stickyYearRef.current && timelineRef.current) {
            const stickyRect = stickyYearRef.current.getBoundingClientRect();
            const timelineRect = timelineRef.current.getBoundingClientRect();
            const relativePosition = 0.5 * (stickyRect.top + stickyRect.bottom) - timelineRect.top;
            setProgressHeight(relativePosition);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateProgressHeight);

        return () => {
            window.removeEventListener('scroll', updateProgressHeight);
        }
    }, []);

    useEffect(() => {
        setFlash(true);
        setShouldTransition(false);
    }, [currentYear]);

    useEffect(() => {
        if (flash) {
            setShouldTransition(true);
            setFlash(false);
        }
    }, [flash]);

    return (
        <div
            ref={timelineRef}
            className={styles.timeline}
            style={{ '--progress-height': `${progressHeight}px` }}
        >
            <div className={styles.stickyLabel}>
                <div className={styles.nameBadge}>
                    <SectionBadge>{name}</SectionBadge>
                </div>
                <div className={styles.sideLabels}>

                    <div className={[styles.stickySideLabel, styles.left].join(' ')}>
                        Funding
                    </div>
                    <div className={[styles.stickySideLabel, styles.right].join(' ')}>
                        Milestones
                    </div>
                </div>
            </div>
            <div
                ref={stickyYearRef}
                className={[styles.stickyYear].join(' ')}
                style={{
                    transition: shouldTransition ? "width var(--speed-extra-slow), box-shadow var(--speed-extra-slow)" : "",
                    width: flash ? "5rem" : "4.5rem",
                    boxShadow: flash ? "var(--shadow-high)" : "var(--shadow-medium)",
                }}
            >
                {currentYear}
            </div>
            {events.map((event, index) => (
                <TimelineEvent
                    stickyYearRef={stickyYearRef}
                    key={index}
                    event={event}
                    index={index}
                    currentYear={currentYear}
                    setCurrentYear={setCurrentYear}
                />
            ))}
        </div>
    );
};

export default Timeline;