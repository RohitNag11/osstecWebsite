'use client'
import styles from './StatCard.module.scss';
import { CountUp } from 'use-count-up';
import { useState } from 'react';

export default function StatCard({ start = true, value, unit, description, decimalPlaces = 0, progressAlignment = 'left', duration = 2, ...props }) {
    const formattedValue = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(value);
    const numericalValue = parseFloat(formattedValue)
    const suffix = formattedValue.replace(numericalValue, '')

    const [triggered, setTriggered] = useState(false)

    return (
        <div className={styles.statCard}>
            <div
                className={styles.progressBar}
                style={{
                    width: start || triggered ? '100%' : '0',
                    transition: `width ${duration}s ease-out`,
                    left: progressAlignment === 'left' ? 0 : 'auto',
                    right: progressAlignment === 'right' ? 0 : 'auto',
                }}
            />
            <div className={styles.value}>
                {unit}
                <CountUp
                    onComplete={() => setTriggered(true)}
                    isCounting={start}
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