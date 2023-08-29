'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';
import { MeshBallScene } from '@/components/3d'
import { HorizontalSwiper, StickySwiper } from '@/components/swipers'
import { innovationData, aboutData } from '../../data'
import { useState, useEffect, useRef, createRef } from 'react';
import { PrimaryButton } from '../components/buttons';
import { StatCard } from '@/components/cards';
import { TagButton } from '../components/buttons';


export default function Home() {
  const [highlightsSecInViewRef, highlightsSecInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const aboutSectionRef = useRef(null);

  const innovationSectionRef = useRef(null);
  const innovationDataLen = innovationData.length;
  const [invCardsRefs, setInvCardsRefs] = useState([]);

  useEffect(() => {
    setInvCardsRefs((elRefs) =>
      Array(innovationDataLen)
        .fill()
        .map((_, i) => createRef(null)),
    );
  }, [innovationDataLen]);

  const [invCardHeights, setInvCardHeights] = useState([]);

  const [inViewInvCardIndex, setInViewInvCardIndex] = useState(0);

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
      {/* <div className={styles.meshBallSceneWrapper}>
        <MeshBallScene mobile={mobile} />
      </div> */}
      <div className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image src="/images/general/lattice_structure_bg.png" alt="OSSTEC Hero Image" layout="fill" objectFit="cover" />
        </div>
        <div className={[styles.fancyPattern, styles.f1].join(' ')} />
        <div className={[styles.fancyPattern, styles.f2].join(' ')} />
        <div className={styles.center}>
          <div className={styles.logo}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/logo_without_text_white.png"
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
              <span className={styles.emph}>One Step Further</span>
              {/* <span className={styles.emph}>Further.</span> */}
            </div>
            <div className={styles.tagLineSub}>
              <p>
                Knee implants with innovative patented lattice technology closely matching native bone properties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollButton}>
        <PrimaryButton
          onClick={() => {
            aboutSectionRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <div>Find out more</div>
          <div>&darr;</div>
        </PrimaryButton>
      </div>
      <div className={styles.aboutSection} ref={aboutSectionRef}>
        <HorizontalSwiper
          data={aboutData}
          mobile={mobile}
          defaultSlidesPerView={1.2}
          cardEffect />
      </div>
      <div className={styles.innovationSection}>
        <div className={styles.header} ref={innovationSectionRef}>
          <div className={styles.title}>
            <span className={styles.primary}>
              Innovation in Care
            </span>
          </div>
          <div className={styles.description}>
            At OSSTEC, we blend engineering expertise with design brilliance. Introducing Stride™ - the zenith of knee implant innovation. Dive in to discover the cutting-edge technologies and passion that set Stride™ apart. Welcome to biomechanical excellence.
          </div>
          <div className={styles.cardControlButtons}>
            {innovationData.map((item, index) => {
              return (
                // <div
                //   key={index}
                //   className={styles.cardControlButton}
                //   onClick={() => {
                //     invCardsRefs[index].current.scrollIntoView({
                //       behavior: "smooth",
                //     });
                //   }}
                // >
                //   {item.title}
                // </div>
                <TagButton
                  key={index}
                  active={index === inViewInvCardIndex}
                  color={item.stylesConfig.primaryColor}
                  onClick={() => {
                    invCardsRefs[index].current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.title}
                </TagButton>
              )
            }
            )}
          </div>
        </div>
        <StickySwiper
          data={innovationData}
          headerRef={innovationSectionRef}
          cardsRefs={invCardsRefs}
          setcCardHeights={setInvCardHeights}
          inViewIndex={inViewInvCardIndex}
          setInViewIndex={setInViewInvCardIndex}
          bottomMarginRem={mobile ? 1 : 2}
          cardGapRem={mobile ? 1 : 1.5}
        />
      </div>
      <div ref={highlightsSecInViewRef} className={styles.highlightsSection} style={{ position: 'sticky', top: '0', height: '200vh', zIndex: '2', }}>
        <div>
          <StatCard
            start={highlightsSecInView}
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
            start={highlightsSecInView}
            value={1200000}
            unit="£"
            description={"seed investment."}
          />
        </div>
      </div>

    </main>
  )
}
