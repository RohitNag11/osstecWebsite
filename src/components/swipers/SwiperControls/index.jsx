'use client'

import styles from './SwiperControls.module.scss'
import { useState, useEffect } from 'react'

export default function SwiperControls({ swiperRef, data }) {
    // console.log(swiperRef)

    // const index = swiper ? swiper.activeIndex : 1
    // const dataLen = data.length
    // const prevName = swiper && data && index !== 0 && data[index - 1].title
    // const nextName = swiper && data && index !== dataLen - 1 && data[index + 1].title

    // const handleNext = () => {
    //     // setIndex(prevVal => Math.min(prevVal + 1, dataLen - 1))
    //     swiper.slideNext()
    // }

    // const handlePrev = () => {
    //     // setIndex(prevVal => Math.max(prevVal - 1, 0))
    //     swiper.slidePrev()
    // }

    return (
        <div className={styles.swiperControls}>
            {/* <div
                className={[styles.button, styles.prevButton, !prevName && styles.hidden].join(' ')}
                onClick={handlePrev}
            >
                <div className={styles.arrow}>&larr;</div>
                <div className={styles.text}>{prevName}</div>
            </div>
            <div
                className={[styles.button, styles.nextButton, !nextName && styles.hidden].join(' ')}
                onClick={handleNext}
            >
                <div className={styles.text}>{nextName}</div>
                <div className={styles.arrow}>&rarr;</div>
            </div> */}
        </div>
    )
}