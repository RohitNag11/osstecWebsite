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
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        if (curIndex == 0) {
            setSwiperIsBeginning(true);
        }
        else if (curIndex == data.length - 1) {
            setSwiperIsEnd(true);
        }
        else {
            setSwiperIsBeginning(false);
            setSwiperIsEnd(false);
        }
    }
        , [curIndex, setSwiperIsBeginning, setSwiperIsEnd, data.length]);

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
            onSlideChange={(swiper) => {
                setCurIndex(swiper.activeIndex)
            }}
            autoplay={{
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                // delay: 0,
            }}
            onSwiper={(swiper) => {
                setSwiper(swiper)
            }}
            onReachBeginning={() => {
                setSwiperIsBeginning(true)
            }}
            onReachEnd={() => {
                setSwiperIsEnd(true)
            }}
        >
            {/* <SwiperControls
                slidesPerView={mobile ? 1.1 : defaultSlidesPerView}
                allowSlideNext={allowSlideNext}
                allowSlidePrev={allowSlidePrev}
                topPosition={parallax ? '40%' : '50%'}
            /> */}
            {data.map((itemData, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        style={{
                            // maxWidth: '100%',
                            // height: '50vh'
                            // borderRadius: 'var(--radius-extra-large)',
                            // overflow: 'hidden',
                            // // boxShadow: 'var(--shadow-high)',
                            // background: 'var(--color-glass)',
                            // backdropFilter: 'blur(10px)',
                            // width: '300px',
                        }}
                    >
                        {/* {parallax ?
                            <ParallaxSlideCard
                                slideData={itemData}
                            /> :
                            <SlideCard
                                slideData={itemData}
                            />
                        } */}
                        <UpdateCard {...itemData} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};