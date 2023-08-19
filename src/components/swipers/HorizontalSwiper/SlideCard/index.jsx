import styles from './SlideCard.module.scss';
import { useSwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

const SlideCardContent = ({ title, subtitle, description, image, stylesConfig = null, href = null }) => {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <div
                    style={{ ...stylesConfig?.titleStyle }}
                    className={styles.title}
                >
                    {title}
                </div>
                <div className={styles.body}>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.subtitle}>
                    <div className={[styles.text, href && styles.arrow].join(' ')}>
                        {subtitle ? subtitle : href && <>&#10132;</>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SlideCard({ slideData, ...props }) {
    const swiperSlide = useSwiperSlide();

    return (
        slideData.href ?
            <Link
                href={slideData.href}
                className={[
                    styles.slideCard,
                    styles.link,
                    swiperSlide.isActive && styles.active
                ].join(' ')}
                {...props}
            >
                <SlideCardContent {...slideData} />
            </Link>
            :
            <div
                className={[
                    styles.slideCard,
                    swiperSlide.isActive && styles.active
                ].join(' ')}
                {...props}

            >
                <SlideCardContent {...slideData} />
            </div>
    )
}
