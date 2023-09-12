import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import styles from './FreeSwiper.module.scss';
import { UpdateCard } from '@/components/cards';

export default function FreeSwiper({ data = [1, 2, 3, 4, 5, 6, 7], mobile = false, tablet = false, defaultSlidesPerView = 2, setSwiper = null, setSwiperIsBeginning = null, setSwiperIsEnd = null }) {

    const slidesPerView = tablet || mobile ? 1 : defaultSlidesPerView;



    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            grabCursor
            freeMode={false}
            modules={[FreeMode, Autoplay, Keyboard]}
            keyboard={{ enabled: true }}
            className={styles.swiper}
            wrapperClass={styles.swiperWrapper}
            slideClass={styles.swiperSlide}
            direction='horizontal'
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