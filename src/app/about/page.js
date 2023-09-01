import styles from './About.module.scss'
import Image from 'next/image'
import { SectionBadge } from '@/components/badges'
import { aboutData, teamData } from '../../../data'
import { PersonCard } from '@/components/cards'

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>

                <div className={styles.imageContainer}>
                    <Image src='/images/general/team2.png' alt='OSSTEC team' layout='fill' objectFit='cover' />
                </div>
                <div className={styles.title}>
                    <h1>About Us</h1>
                    <div className={styles.description}>
                        OSSTEC is a London-based startup ...
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
                                {...item}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        </main>
    )
}