'use client'
import { useEffect, useState } from 'react'
import styles from './StickySwiper.module.scss'
import { useInView } from 'react-intersection-observer';
import { CoverImage } from '@/components/imageComponents';

// const parser = new DOMParser();

function CardContent({ data, index, setInViewIndex }) {

    const [inViewRef, inView] = useInView({
        threshold: 0.1,
        // triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            setInViewIndex(index);
        }
        else {
            setInViewIndex(index == 0 ? 0 : index - 1);
        }
    }, [inView, index, setInViewIndex]);

    return (
        <div className={styles.cardContent} ref={inViewRef}>
            <div className={styles.imageContainer}>
                <div
                    className={styles.overlay}
                    style={{
                        background: `linear-gradient(to bottom, ${data.stylesConfig.primaryColor} 40%, rgba(0,0,0,0) 100%)`,
                    }}
                />
                <CoverImage
                    src={data.image}
                    alt={data.title}
                    placeholderColor={data.stylesConfig.primaryColor}
                    shimmerPlaceholder
                    borderRadius='0 0 0 0'
                />
            </div>
            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: data.description }}
                style={{
                    textShadow: `0 0 10px ${data.stylesConfig.primaryColor}`,
                }}
            />
        </div>
    )
}

export default function StickySwiper({ data, headerRef, cardGapRem = 1.5, bottomMarginRem = 2, cardsRefs, setCardHeights = null, inViewIndex = 0, setInViewIndex, shrinkRatio = 0.97, ...props }) {


    const getCardDynamicStyle = (index) => {
        const noCardsOntop = Math.max(0, inViewIndex - index);
        return {
            scale: 1 - noCardsOntop * (1 - shrinkRatio),
        }
    };

    const [firstCardTop, setFirstCardTop] = useState('20rem')


    useEffect(() => {
        if (headerRef.current) {
            setFirstCardTop(headerRef.current.clientHeight)
        }
    }, [headerRef])
    // handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (headerRef.current) {
                setFirstCardTop(headerRef.current.clientHeight)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [headerRef])
    const cardTops = data.map((itemData, index) => {
        return `calc(${firstCardTop}px + ${index * cardGapRem}rem)`
    })
    const cardHeights = data.map((itemData, index) => {
        return `calc(100vh - ${cardTops[index]} - ${bottomMarginRem}rem)`
    })

    return (
        // <div className={styles.stickySwiper}>
        <>
            {data.map((itemData, index) => {
                return (
                    <div
                        key={index}
                        className={styles.card}
                        ref={cardsRefs[index]}
                        style={{
                            top: cardTops[index],
                            height: cardHeights[index],
                            scrollMarginTop: cardTops[index],
                            margin: `${index == 0 ? 0 : 20}rem ${bottomMarginRem}rem 0 ${bottomMarginRem}rem`,
                            backgroundColor: `${itemData.stylesConfig.primaryColor}80`,
                            ...getCardDynamicStyle(index)
                        }}
                    >
                        <CardContent data={itemData} index={index} setInViewIndex={setInViewIndex} />
                    </div>
                )
            })}
            <div className={styles.spacer} style={{ height: '20rem' }}></div>
            {/* </div> */}
        </>
        // </div>
    )
}