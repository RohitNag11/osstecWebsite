'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import MeshPattern from '@/components/patterns/MeshPattern'
import NavbarSpacer from '@/components/Layout/Navbar/navBarSpacer'
import { useInView } from 'react-intersection-observer';
import { MeshBallScene } from '@/components/3d'

export default function Home() {
  const [card1ref, card1InView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [card2ref, card2InView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [card3ref, card3InView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const cardsInView = [card1InView, card2InView, card3InView];
  const noCardsInView = cardsInView.filter(card => card === true).length;
  const noCards = cardsInView.length;
  const getCardDynamicStyle = (index) => {
    const noCardsOntop = Math.max(0, noCardsInView - index);
    return {
      scale: 1 - noCardsOntop * 0.02,
      // filter: `grayscale(${noCardsOntop * 100 / noCards}%)`,
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.meshBallSceneWrapper}>
        <MeshBallScene visible={!card2InView} />
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
              <span>Regenarative</span>
              <span className={styles.emph}>BoneTech.</span>
            </div>
            <div className={styles.tagLineSub}>
              <p>
                Knee implants with innovative patented lattice technology closely matching native bone properties.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.pattern1}>
          <MeshPattern layers={5} />
        </div>
        <div className={styles.pattern2}>
          <MeshPattern layers={4} />
        </div>
      </div>
      <div
        ref={card1ref}
        className={[styles.pageCard, styles.stacked].join(' ')}
        style={getCardDynamicStyle(1)}
      >
        <div className={styles.cardHeader}>
          <div className={styles.number}>01/05</div>
          <div className={styles.title}>Innovation</div>
        </div>
        <div className={styles.slider}>
          <div className={styles.sliderItem} />
          <div className={[styles.sliderItem, styles.active].join(' ')} />
          <div className={styles.sliderItem} />
        </div>
      </div>
      <div
        ref={card2ref}
        className={[styles.pageCard].join(' ')}
        style={getCardDynamicStyle(2)}
      >
        <div className={styles.cardHeader}>
          <div className={styles.number}>01/05</div>
          <div className={styles.title}>Innovation</div>
        </div>
        <div className={styles.slider}>
          <div className={styles.sliderItem} />
          <div className={[styles.sliderItem, styles.active].join(' ')} />
          <div className={styles.sliderItem} />
        </div>
      </div>
      <div
        ref={card3ref}
        className={[styles.pageCard].join(' ')}
        style={getCardDynamicStyle(3)}
      >
        <div className={styles.cardHeader}>
          <div className={styles.number}>01/05</div>
          <div className={styles.title}>Innovation</div>
        </div>
        <div className={styles.slider}>
          <div className={styles.sliderItem} />
          <div className={[styles.sliderItem, styles.active].join(' ')} />
          <div className={styles.sliderItem} />
        </div>
      </div>
    </main>
  )
}
