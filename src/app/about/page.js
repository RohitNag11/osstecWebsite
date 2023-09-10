'use client'
import styles from './About.module.scss'
import Image from 'next/image'
import { SectionBadge } from '@/components/badges'
import { timelineData, teamData } from '../../../data'
import { PersonCard } from '@/components/cards'
import { useState, useEffect } from 'react'
import { GeneralPopup } from '@/components/popups'
import { CoverImage } from '@/components/imageComponents'
import { Timeline } from '@/components/misc'


export default function About() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupPersonIndex, setPopupPersonIndex] = useState(0);

    const handlePersonClick = (index) => {
        setPopupPersonIndex(index);
        setShowPopup(true);
    }

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
        <>
            <GeneralPopup isOpen={showPopup} onClose={() => setShowPopup(false)}>
                <div className={styles.personDetailsPopup}>
                    <div className={styles.imageContainer}>
                        {/* <Image src={teamData[popupPersonIndex].image} alt={teamData[popupPersonIndex].name}
                            objectFit='cover'

                            layout='fill' /> */}
                        <CoverImage src={teamData[popupPersonIndex].image} alt={teamData[popupPersonIndex].name} />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            {teamData[popupPersonIndex].name}
                        </div>
                        <div className={styles.title}>
                            {teamData[popupPersonIndex].position}
                        </div>
                        <div className={styles.description}>
                            {teamData[popupPersonIndex].longSummary}
                        </div>
                    </div>
                </div>
            </GeneralPopup>
            <main className={styles.main}>
                <div className={styles.header}>

                    <div className={styles.imageContainer}>
                        {/* <Image src='/images/general/team2.png' alt='OSSTEC team' layout='fill' objectFit='cover' /> */}
                        <CoverImage src='/images/general/team2.png' alt='OSSTEC team' />
                    </div>
                    <div className={styles.title}>
                        <h1>About Us</h1>
                        <div className={styles.description}>
                            OSSTEC is a London based spinout founded in Imperial College London. We have brought together a team from a variety of backgrounds, balancing technical and market expertise with a blend of ambitious drive and expertise gained through years of experience in medical devices.
                            <br /><br />
                            To achieve our goal of providing a knee implant that improves the lives of millions of people, we are working to bring our device from lab to the operating room, used in hospitals worldwide.
                        </div>
                    </div>
                </div>
                <div className={styles.teamSection}>
                    <div className={styles.sideBar}>
                        <SectionBadge>The Team</SectionBadge>
                        <h2>Meet the OSSTEC team</h2>
                        <p>OSSTEC&apos;s team combines engineers, surgeons and commercial expertise. We have decades of experience in developing and commercialising technologies at the forefront of science and bringing innovation from the ideation phase to life changing medical solutions.</p>
                    </div>
                    <div className={styles.peopleGrid}>
                        {teamData.map((item, index) => {
                            return (
                                <PersonCard
                                    key={index}
                                    mobile={mobile}
                                    {...item}
                                    onClick={() => handlePersonClick(index)}
                                />
                            )
                        }
                        )}
                    </div>
                </div>
                <div className={styles.timelineSection}>
                    <div className={styles.timelineHeader}>
                        <div className={styles.badge}>
                            <SectionBadge>Our Story</SectionBadge>
                        </div>
                        <div className={styles.title}>
                            From Vision to Reality
                        </div>
                        <div className={styles.description}>
                            From our 2013 roots researching 3D structures at Imperial College London to our evolving team and patent portfolio in 2023, OSSTEC&apos;s journey reflects a deep commitment to innovation in biomimetic structures.
                        </div>
                    </div>
                    <Timeline
                        events={timelineData}
                    />
                </div>
            </main>
        </>
    )
}