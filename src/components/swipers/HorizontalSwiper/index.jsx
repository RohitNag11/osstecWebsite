import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, EffectCards, Parallax, EffectCoverflow } from 'swiper/modules';
import SlideCard from './SlideCard';
import ParallaxSlideCard from './ParallaxSlideCard';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import styles from './Swiper.module.scss'
import { useMemo } from 'react';

export default function HorizontalSwiper({ data, swiper, setSwiper, mobile, cardEffect = false, parallax = false, defaultSlidesPerView = 1.2 }) {
    const effect = useMemo(() => {
        if (cardEffect) {
            return 'cards'
        }
        return null
    }, [cardEffect])

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={mobile ? 1.1 : defaultSlidesPerView}
            centeredSlides
            grabCursor
            effect={effect}
            parallax={parallax}
            modules={[Keyboard, EffectCards, Parallax, EffectCoverflow]}
            onSwiper={setSwiper}
            keyboard={{ enabled: true }}
            initialSlide={0}
            speed={800}
            onSlideChange={() => swiper.update()}
            className={styles.swiper}
            wrapperClass={styles.swiperWrapper}
            slideClass={styles.swiperSlide}
            direction='horizontal'
        >
            {data.map((itemData, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        style={{
                            borderRadius: 'var(--radius-extra-large)',
                            overflow: 'hidden',
                            // border: 'var(--border-secondary)'
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