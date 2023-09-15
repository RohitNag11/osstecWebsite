import styles from './TeamSection.module.scss'
import { PiUsersThreeFill } from 'react-icons/pi';
import { SectionBadge } from '@/components/badges';
import { PersonCard } from '@/components/cards';

export default function TeamSection({ id, teamData, handlePersonClick, mobile, ...props }) {

    return (
        <>
            <div className={styles.teamSection} id={id}>
                <div className={styles.sideBar}>
                    <SectionBadge><PiUsersThreeFill />The Team</SectionBadge>
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
        </>
    )
}