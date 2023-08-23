'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';
import { MeshBallScene } from '@/components/3d'
import { HorizontalSwiper, SwiperControls } from '@/components/swipers'
import { innovationData, aboutData } from '../../data'
import { useState, useEffect, useRef } from 'react';
import { PrimaryButton } from '../components/buttons';
import { StatCard } from '@/components/cards';


export default function Home() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const [card1ViewRef, card1InView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [card2ViewRef, card2InView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [card3ViewRef, card3InView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const cardsInView = [card1InView, card2InView, card3InView];
  const noCardsInView = cardsInView.filter(card => card === true).length;
  const getCardDynamicStyle = (index) => {
    const noCardsOntop = Math.max(0, noCardsInView - index);
    return {
      scale: 1 - noCardsOntop * 0.02,
    }
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.scrollButton}>
        <PrimaryButton
          onClick={() => {
            card1Ref.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <div>Find out More</div>
          <div>&darr;</div>
        </PrimaryButton>
      </div>
      <div className={styles.meshBallSceneWrapper}>
        <MeshBallScene visible={!card2InView} mobile={mobile} />
      </div>
      <div
        className={[
          styles.pageCard,
          styles.heroCard
        ].join(' ')}
        style={getCardDynamicStyle(0)}
      >
        <div className={[styles.fancyPattern, styles.f1].join(' ')} />
        <div className={[styles.fancyPattern, styles.f2].join(' ')} />
        <div className={styles.center}>
          <div className={styles.logo}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/logo_without_text.png"
                alt="OSSTEC Logo"
                fill
              />
            </div>
            <div className={styles.text}>
              OSSTEC
            </div>
          </div>
          <div className={styles.tagLine}>
            <div className={styles.tagLineMain}>
              <span>One Step</span>
              <span className={styles.emph}>Further.</span>
            </div>
            <div className={styles.tagLineSub}>
              <p>
                Knee implants with innovative patented lattice technology closely matching native bone properties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={card1ViewRef}
        className={[
          styles.pageCard
        ].join(' ')}
        style={getCardDynamicStyle(1)}
      >
        <div className={styles.cardHeader} ref={card1Ref}>
        </div>
        <div className={styles.cardMain}>
          <HorizontalSwiper
            data={aboutData}
            mobile={mobile}
            defaultSlidesPerView={1.2}
            cardEffect />
        </div>
        <div className={styles.cardFooter}>
          <PrimaryButton
            onClick={() => {
              card2Ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div>Product</div>
            <div>&darr;</div>
          </PrimaryButton>
        </div>
      </div>
      <div
        ref={card2ViewRef}
        className={[styles.pageCard, styles.innovationCard].join(' ')}
        style={getCardDynamicStyle(2)}
      >
        <div className={styles.cardHeader} ref={card2Ref}>
          {/* <div className={styles.title}>STRIDE&trade;</div> */}
        </div>
        <div className={styles.cardMain}>
          <div className={styles.title}>
            <span className={styles.secondary}>Innovation at OSSTEC: Introducing,</span>
            <span className={styles.primary}>Stride.</span>
          </div>
          <div className={styles.description}>
            At OSSTEC, we blend engineering expertise with design brilliance. Introducing Stride™ - the zenith of knee implant innovation. Dive in to discover the cutting-edge technologies and passion that set Stride™ apart. Welcome to biomechanical excellence.
          </div>
          <HorizontalSwiper
            data={innovationData}
            mobile={mobile}
            defaultSlidesPerView={1.2}
            parallax
          />
        </div>
        <div className={styles.cardFooter}>
          <PrimaryButton
            onClick={() => {
              card3Ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div>Our Highlights</div>
            <div>&darr;</div>
          </PrimaryButton>
        </div>
      </div>
      <div
        ref={card3ViewRef}
        className={[styles.pageCard, styles.notSticky, styles.highlightsCard].join(' ')}
        style={getCardDynamicStyle(3)}
      >
        <div className={styles.cardHeader} ref={card3Ref}>
          {/* <div className={styles.title}>Our Highlights </div> */}
        </div>
        <div className={styles.highlightCardsContainer}>
          <div>
            <StatCard
              start={card3InView}
              progressAlignment='left'
              value={800000}
              unit="£"
              description={"total UK grant funding."}
            />
          </div>
          <div>
            <StatCard
              decimalPlaces={2}
              progressAlignment='right'
              start={card3InView}
              value={1200000}
              unit="£"
              description={"seed investment."}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
