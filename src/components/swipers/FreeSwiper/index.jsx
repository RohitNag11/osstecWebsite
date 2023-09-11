'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Keyboard } from 'swiper/modules';
// import ParallaxSlideCard from './ParallaxSlideCard';
import 'swiper/css';
// import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import styles from './FreeSwiper.module.scss';
import { useMemo, useState, useEffect } from 'react';
import { UpdateCard } from '@/components/cards';
// import { SwiperControls } from '..';

export default function FreeSwiper({ data = [1, 2, 3, 4, 5, 6, 7], mobile = false, tablet = false, defaultSlidesPerView = 2, setSwiper = null, setSwiperIsBeginning = null, setSwiperIsEnd = null }) {
    // const [curIndex, setCurIndex] = useState(0);

    const slidesPerView = tablet || mobile ? 1 : defaultSlidesPerView;



    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            // centeredSlides
            grabCursor
            freeMode={false}
            modules={[FreeMode, Autoplay, Keyboard]}
            keyboard={{ enabled: true }}
            // initialSlide={0}
            // speed={500}
            className={styles.swiper}
            wrapperClass={styles.swiperWrapper}
            slideClass={styles.swiperSlide}
            direction='horizontal'
            // autoplay={{
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            //     // delay: 0,
            // }}
            onSwiper={(swiper) => {
                setSwiper(swiper)
            }}
            onSlideChange={(swiper) => {
                !swiper.isBeginning && setSwiperIsBeginning(false)
                !swiper.isEnd && setSwiperIsEnd(false)
            }}
            onReachBeginning={() => {
                setSwiperIsBeginning(true)
            }}
            onReachEnd={() => {
                setSwiperIsEnd(true)
            }}
        >
            {data.map((itemData, index) => {
                return (
                    <SwiperSlide
                        key={index}
                    >
                        <UpdateCard {...itemData} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};