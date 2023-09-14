import { useState, useRef } from 'react';
import styles from './YearRangeSlider.module.scss';

function YearRangeSlider({ min, max, onChange }) {
    const [startValue, setStartValue] = useState(min);
    const [endValue, setEndValue] = useState(max);
    const trackRef = useRef(null);

    const handleStartChange = (e) => {
        const newValue = Math.min(Number(e.target.value), endValue);
        setStartValue(newValue);
        onChange({ start: newValue, end: endValue });
    };

    const handleEndChange = (e) => {
        const newValue = Math.max(Number(e.target.value), startValue);
        setEndValue(newValue);
        onChange({ start: startValue, end: newValue });
    };

    return (
        <div className={styles.sliderContainer}>
            <div ref={trackRef} className={styles.sliderTrack}>
                <div className={styles.sliderRange} style={{ left: `${((startValue - min) / (max - min)) * 100}%`, right: `${100 - ((endValue - min) / (max - min)) * 100}%` }}></div>
                <div className={styles.sliderHandle} style={{ left: `${((startValue - min) / (max - min)) * 100}%` }} onMouseDown={handleStartChange}></div>
                <div className={styles.sliderHandle} style={{ left: `${((endValue - min) / (max - min)) * 100}%` }} onMouseDown={handleEndChange}></div>
            </div>
            <div className={styles.yearDisplay}>
                <span>{startValue}</span> - <span>{endValue}</span>
            </div>
        </div>
    );
}

export default YearRangeSlider;