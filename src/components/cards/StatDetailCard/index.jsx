import styles from './StatDetailCard.module.scss'
import { CountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';

export default function StatDetailCard({ title, value, decimalPlaces, unit, description, isProblem, duration = 2, arrow = null, ...props }) {

    const formattedValue = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(value);
    const numericalValue = parseFloat(formattedValue);
    const suffix = formattedValue.replace(numericalValue, '');

    const arrowString = arrow ? arrow === 'up' ? '↑' : '↓' : null;

    const [inViewRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });


    return (
        <div className={[styles.statDetailCard, isProblem && styles.isProblem].join(' ')} {...props} ref={inViewRef}>
            <div className={styles.title}>{title}</div>
            <div className={styles.value}>
                {arrowString && <div className={styles.arrow}>{arrowString}</div>}
                <div className={styles.text}>
                    <CountUp
                        isCounting={inView}
                        end={numericalValue}
                        duration={duration}
                        decimalPlaces={decimalPlaces}
                        decimalSeparator='.'
                        easing="easeOutCubic"
                    />
                    {suffix}{unit}
                </div>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}