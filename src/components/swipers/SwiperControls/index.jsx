'use client'

import styles from './SwiperControls.module.scss'
import { useState, useEffect } from 'react'
import { useSwiper } from 'swiper/react';

export default function SwiperControls({ slidesPerView, allowSlideNext, allowSlidePrev }) {
    const swiper = useSwiper();

    const handleNext = () => {
        swiper.slideNext()
    }

    const handlePrev = () => {
        swiper.slidePrev()
    }

    const margin = (100 * (slidesPerView - 1)) / (2 * slidesPerView)

    return (
        <>
            <div
                className={[styles.button, styles.prevButton, !allowSlidePrev && styles.hidden].join(' ')}
                style={{ left: `${margin}vw` }}
                onClick={handlePrev}
            >
                <div className={styles.arrow}>&larr;</div>
            </div>
            <div
                className={[styles.button, styles.nextButton, !allowSlideNext && styles.hidden].join(' ')}
                style={{ right: `${margin}vw` }}
                onClick={handleNext}
            >
                <div className={styles.arrow}>&rarr;</div>
            </div>
        </>
    )
}