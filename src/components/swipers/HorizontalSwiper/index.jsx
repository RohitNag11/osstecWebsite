import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, EffectCards } from 'swiper/modules';
import SlideCard from './SlideCard';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './Swiper.module.scss'

export default function HorizontalSwiper({ data, swiper, setSwiper, mobile }) {

    return (
        <Swiper
            // spaceBetween={5}
            slidesPerView={mobile ? 1.05 : 1.2}
            centeredSlides
            grabCursor
            effect='cards'
            modules={[Keyboard, EffectCards]}
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
                            border: 'var(--border-secondary)'
                        }}
                    >
                        <SlideCard
                            slideData={itemData}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};