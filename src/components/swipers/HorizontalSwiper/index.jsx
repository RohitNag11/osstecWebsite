'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, EffectCards, Parallax } from 'swiper/modules';
import SlideCard from './SlideCard';
import ParallaxSlideCard from './ParallaxSlideCard';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './Swiper.module.scss'
import { useMemo, useState } from 'react';
import { SwiperControls } from '..';

export default function HorizontalSwiper({ data, mobile, cardEffect = false, parallax = false, defaultSlidesPerView = 1.2 }) {
    const effect = useMemo(() => {
        if (cardEffect) {
            return 'cards'
        }
        return null
    }, [cardEffect])

    const [curIndex, setCurIndex] = useState(0)
    const allowSlideNext = curIndex < data.length - 1
    const allowSlidePrev = curIndex > 0

    return (
        <Swiper
            spaceBetween={'5rem'}
            slidesPerView={mobile ? 1.1 : defaultSlidesPerView}
            centeredSlides
            grabCursor
            effect={effect}
            parallax={parallax}
            modules={[Keyboard, EffectCards, Parallax]}
            keyboard={{ enabled: true }}
            initialSlide={0}
            speed={800}
            className={styles.swiper}
            wrapperClass={styles.swiperWrapper}
            slideClass={styles.swiperSlide}
            direction='horizontal'
            onSlideChange={(swiper) => {
                setCurIndex(swiper.activeIndex)
            }}
        >
            <SwiperControls
                slidesPerView={mobile ? 1.1 : defaultSlidesPerView}
                allowSlideNext={allowSlideNext}
                allowSlidePrev={allowSlidePrev}
                topPosition={parallax ? '40%' : '50%'}
            />
            {data.map((itemData, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        style={{
                            borderRadius: 'var(--radius-extra-large)',
                            overflow: 'hidden',
                            boxShadow: !parallax && 'var(--shadow-high)',
                        }}
                    >
                        {parallax ?
                            <ParallaxSlideCard
                                slideData={itemData}
                            /> :
                            <SlideCard
                                slideData={itemData}
                            />
                        }
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};