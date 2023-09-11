'use client'
import styles from './NewsSection.module.scss';
import { SectionBadge } from '@/components/badges';
import { FreeSwiper } from '@/components/swipers';
import { useState } from 'react';

export function NewsSection({ data, mobile = false, tablet = false }) {
    const [swiper, setSwiper] = useState(null);
    const [swiperIsEnd, setSwiperIsEnd] = useState(false);
    const [swiperIsBeginning, setSwiperIsBeginning] = useState(true);

    return (
        <div className={styles.newsSection}>
            <div className={styles.header}>
                <SectionBadge>News & Updates</SectionBadge>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.titleCard}>
                    {/* <div className={styles.badgeContainer}>
                        <SectionBadge>News & Updates</SectionBadge>
                    </div> */}
                    <div className={styles.title}>Press Room</div>
                    <div className={styles.subtitle}>
                        Keep up to date with all the latest news and updates from OSSTEC by following our <a href='https://www.linkedin.com/company/osstec' target='_blank'>LinkedIn</a> page.
                    </div>
                    <div className={styles.controlsContainer}>
                        <div
                            className={[styles.button, swiperIsBeginning && styles.disabled].join(' ')}
                            onClick={() => {
                                swiper.slidePrev()
                            }}
                        >
                            &larr;
                        </div>
                        <div
                            className={[styles.button, swiperIsEnd && styles.disabled].join(' ')}
                            onClick={() => {
                                swiper.slideNext()
                            }}
                        >
                            &rarr;
                        </div>
                    </div>
                </div>
                <div
                    className={styles.sliderContainer}
                >
                    <FreeSwiper
                        data={data}
                        mobile={mobile}
                        tablet={tablet}
                        setSwiper={setSwiper}
                        setSwiperIsBeginning={setSwiperIsBeginning}
                        setSwiperIsEnd={setSwiperIsEnd}
                    />
                </div>
            </div>
        </div>
    )
}