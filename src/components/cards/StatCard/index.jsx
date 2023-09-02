'use client'
import styles from './StatCard.module.scss';
import { CountUp } from 'use-count-up';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function StatCard({ value, unit, description, decimalPlaces = 0, progressAlignment = 'left', duration = 2, animation: backgroundAnimation = true, background = 'linear-gradient(to bottom right, #44444484, #40455576)', ...props }) {
    const formattedValue = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(value);
    const numericalValue = parseFloat(formattedValue)
    const suffix = formattedValue.replace(numericalValue, '')

    const [triggered, setTriggered] = useState(backgroundAnimation ? false : true)


    const [inViewRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });


    return (
        <div className={styles.statCard} {...props} ref={inViewRef}>
            <div
                className={styles.progressBar}
                style={{
                    width: inView || triggered ? '100%' : '0',
                    transition: `width ${duration}s ease-out`,
                    left: progressAlignment === 'left' ? 0 : 'auto',
                    right: progressAlignment === 'right' ? 0 : 'auto',
                    background: background,
                }}
            />
            <div className={styles.value}>
                {unit}
                <CountUp
                    onComplete={() => setTriggered(true)}
                    isCounting={inView}
                    end={numericalValue}
                    duration={duration}
                    decimalPlaces={decimalPlaces}
                    decimalSeparator='.'
                    easing="easeOutCubic"
                // formatter={(value) => value.toLocaleString()}
                />
                {suffix}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}