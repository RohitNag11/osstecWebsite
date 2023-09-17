import styles from './StorySection.module.scss'
import { PiCalendarCheckFill } from 'react-icons/pi';
import { Timeline } from '@/components/misc';
import SectionBadge from '@/components/badges/SectionBadge';

export default function StorySection({ timelineData, children, id, ...props }) {
    return (
        <div className={styles.timelineSection} id={id}>
            <div className={styles.badge}>
                <SectionBadge><PiCalendarCheckFill />Our Story</SectionBadge>
            </div>
            <div className={styles.timelineHeader}>
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
    )
}