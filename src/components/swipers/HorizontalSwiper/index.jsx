import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Controller } from 'swiper/modules';
import { useState, useEffect } from 'react';
import SlideCard from './SlideCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';

export default function HorizontalSwiper({ data, setSwiper, mobile }) {

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={mobile ? 1 : 1.2}
            centeredSlides
            // mousewheel
            grabCursor
            modules={[Keyboard, Controller]}
            onSwiper={setSwiper}
            keyboard={{ enabled: true }}
            initialSlide={0}
            style={{ height: '100%', width: '100%', borderRadius: 'var(--radius-extra-large)', overflow: 'hidden' }}
            // onReachEnd={handleReachEnd}
            speed={800}
        >
            {data.map((itemData, index) => {
                return (
                    <SwiperSlide key={index}>
                        <SlideCard slideData={itemData} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};