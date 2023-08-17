import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Controller } from 'swiper/modules';
import { useState, useRef } from 'react';
import SlideCard from './SlideCard';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';

export default function HorizontalSwiper({ data }) {
    const [swiper, setSwiper] = useState(null);


    const handleReachEnd = () => {
        swiper.mousewheel.disable();
    }

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={1.2}
            // centeredSlides
            // mousewheel
            grabCursor
            modules={[Keyboard, Mousewheel, Controller]}
            onSwiper={setSwiper}
            keyboard={{ enabled: true }}
            initialSlide={0}
            // onSlideChange={() => console.log('slide change')}
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