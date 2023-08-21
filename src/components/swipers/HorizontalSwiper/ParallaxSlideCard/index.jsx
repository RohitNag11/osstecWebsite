import styles from './ParallaxSlideCard.module.scss';
import { useSwiperSlide } from 'swiper/react';
import Image from 'next/image';

const ParallaxSlideCardContent = ({ title, subtitle, description, image, stylesConfig = null, href = null }) => {
    return (
        <>
            {/* <div
                className={styles.left}
                data-swiper-parallax="-100"
            >
                <div
                    style={{ ...stylesConfig?.titleStyle }}
                    className={styles.title}
                    data-swiper-parallax="300"
                >
                    {title}
                </div>
                <div
                    className={styles.body}
                >
                    <div
                        className={styles.description}
                    >
                        {description}
                    </div>
                </div>
            </div>
            <div
                className={styles.right}
                data-swiper-parallax="300"
            >
                <div
                    className={styles.imageContainer}
                >
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.subtitle}>
                    <div className={[styles.text, href && styles.arrow].join(' ')} >
                        {subtitle ? subtitle : href && <>&rarr;</>}
                    </div>
                </div>
            </div> */}
            <div className={styles.spacer} data-swiper-parallax="0">
                <div className={styles.float}>
                    <div
                        className={styles.imageContainer}
                    >
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.text} data-swiper-parallax="-300">
                <div
                    style={{ ...stylesConfig?.titleStyle }}
                    className={styles.title}
                    data-swiper-parallax="100"
                // data-swiper-parallax="300"
                >
                    {title}
                </div>
                <div
                    className={styles.description}
                    data-swiper-parallax="0"
                >
                    {description}
                </div>
            </div>
        </>
    )
}

export default function ParallaxSlideCard({ slideData, ...props }) {
    const swiperSlide = useSwiperSlide();

    return (
        <div
            className={[
                styles.slideCard,
                swiperSlide.isActive && styles.active
            ].join(' ')}
            {...props}

        >
            <ParallaxSlideCardContent {...slideData} />
        </div>
    )
}
