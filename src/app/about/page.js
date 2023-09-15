'use client'
import styles from './About.module.scss'
import { pagesData, timelineData, teamData, publicationsData } from '../../../data'
import { useState, useEffect } from 'react'
import { GeneralPopup } from '@/components/popups'
import { CoverImage } from '@/components/imageComponents'
import { PublicationsSection, TeamSection, StorySection } from '@/components/sections'

export default function About() {
    const aboutPageData = pagesData.find(page => page.title === 'About')
    const aboutDescriptionParagraphs = aboutPageData.description;
    const aboutImage = aboutPageData.image;

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
                        <CoverImage src={aboutImage} alt='About Us - OSSTEC' />
                    </div>
                    <div className={styles.title}>
                        <h1>About Us</h1>
                        <div className={styles.description}>
                            {aboutDescriptionParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                        </div>
                    </div>
                </div>
                <TeamSection id='the-team' teamData={teamData} handlePersonClick={handlePersonClick} mobile={mobile} />
                <StorySection id='our-story' timelineData={timelineData} />
                <PublicationsSection id='publications' publicationsData={publicationsData} />
            </main>
        </>
    )
}