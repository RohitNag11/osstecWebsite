'use client'

import Image from 'next/image'
import styles from './Home.module.scss'
import { useInView } from 'react-intersection-observer';
import { HorizontalSwiper, StickySwiper } from '@/components/swipers'
import { innovationData, aboutData, companyData, clinicalNeedsData, fundingData, newsData } from '../../data'
import { useState, useEffect, useRef, createRef } from 'react';
import { TagButton } from '../components/buttons';
import { SectionBadge } from '@/components/badges';
import { CoverImage } from '@/components/imageComponents';
import { StatDetailCard } from '@/components/cards';
import { FundingSection, NewsSection, ClinicalNeedsSection } from '@/components/sections';
import { PiHandHeartFill, PiLightbulbFilamentFill, PiHandshakeFill, PiPiggyBankFill } from 'react-icons/pi';

export default function Home() {
  const [innovationSecInViewRef, innovationSecInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [highlightsSecInViewRef, highlightsSecInView] = useInView({
    threshold: 0.5,
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
  const [tablet, setTablet] = useState(false);

  const [passedInovationSec, setPassedInovationSec] = useState(false);
  useEffect(() => {
    if (innovationSecInView) {
      setPassedInovationSec((prev) => !prev);
    }
  }
    , [innovationSecInView]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200 && window.innerWidth >= 600) {
        setTablet(true);
      } else if (window.innerWidth < 600) {
        setMobile(true);
      } else {
        setTablet(false);
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
      <div className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/general/lattice_structure_bg_2_blue-2.jpg"
            alt="OSSTEC Hero Image"
            layout="fill"
            objectFit="cover"
            key='heroImage'
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.center}>
          <div className={styles.logo}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/icons/logo_without_text_white.png"
                alt="OSSTEC Logo"
                fill
                key='logo'
              />
            </div>
            <div className={styles.text}>
              OSSTEC
            </div>
          </div>
          <div className={styles.tagLine}>
            One Step Further
          </div>
          <div className={styles.description}>
          Knee implants combining innovative 3D-printed articulating surfaces with biomimetic cementless fixation for enhanced functionality, superior fixation, and a long-lasting bone foundation.
          </div>
        </div>
      </div>
      <div
        className={styles.scrollDownButton}
        onClick={() => {
          aboutSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}>
        <div className={styles.mouseIcon}>
          <div className={styles.scrollerIcon}>
          </div>
        </div>
      </div>
      <div className={styles.aboutSection} ref={aboutSectionRef} id={"mission"}>
        <HorizontalSwiper
          data={aboutData}
          mobile={mobile}
          defaultSlidesPerView={1.2}
          cardEffect />
      </div>
      <ClinicalNeedsSection clinicalNeedsData={clinicalNeedsData} id='why-osstec' />
      <div className={styles.technologySectionBadge} id={"our-technology"}>
        <SectionBadge><PiLightbulbFilamentFill /> Our Technology</SectionBadge>
      </div>
      <div className={styles.innovationSection} ref={innovationSecInViewRef}>
        <div className={styles.header} ref={innovationSectionRef}>
          <div className={styles.title}>
            <span className={styles.primary}>
              Innovation in Care
            </span>
          </div>
          <div className={styles.description}>
            At OSSTEC, we have spent years pushing the boundaries of engineering and medical research to introduce a new generation of partial knee implant.
          </div>
          <div className={styles.cardControlButtons}>
            {innovationData.map((item, index) => {
              return (
                <TagButton
                  key={index}
                  active={index === inViewInvCardIndex}
                  color={item.stylesConfig.primaryColor}
                  // clickable={index > inViewInvCardIndex}
                  // onClick={() => {
                  //   invCardsRefs[index].current.scrollIntoView({
                  //     behavior: "smooth",
                  //   });
                  // }}
                  clickable={false}
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
      <div className={styles.highlightsSection} ref={highlightsSecInViewRef} id={'partners-funding'}>
        <div className={styles.header}>

          <div className={styles.sectionBadge}>
            <SectionBadge><PiHandshakeFill />Partners</SectionBadge>
          </div>
          <div className={styles.description}>
            We are collaborating with the UK&apos;s leading medical institutions and organisations to develop the next generation of orthopaedic implants.
          </div>
        </div>

        <div className={styles.companiesContainer}>
          {
            companyData.map((item, index) => {
              return (
                <div className={styles.companyLogo} key={index}>
                  <Image src={item.image} alt={item.name} layout="fill" objectFit="contain"
                    key={'company' + index} />
                </div>
              )
            })
          }
        </div>

        <div className={styles.fundingSectionBadge}>
          <SectionBadge><PiPiggyBankFill />Funding</SectionBadge>
        </div>
        <FundingSection data={fundingData} />
      </div>
      <NewsSection data={newsData.sort((a, b) => b.date - a.date)} mobile={mobile} tablet={tablet} />
    </main>
  )
}
