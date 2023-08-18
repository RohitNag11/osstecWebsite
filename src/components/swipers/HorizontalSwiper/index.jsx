import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Controller } from 'swiper/modules';
import { useState, useEffect } from 'react';
import SlideCard from './SlideCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';

export default function HorizontalSwiper({ data, setSwiper }) {
    const [slidesPerView, setSlidesPerView] = useState(1.2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(1.2);
            }
        }

        // Set initial slidesPerView based on current window size
        handleResize();

        // Add the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={slidesPerView}
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