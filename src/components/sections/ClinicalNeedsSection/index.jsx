import styles from './ClinicalNeedsSection.module.scss'
import { SectionBadge } from '@/components/badges'
import { PiHandHeartFill } from 'react-icons/pi'
import { CoverImage } from '@/components/imageComponents'
import { StatDetailCard } from '@/components/cards'

export default function ClinicalNeedsSection({ clinicalNeedsData, id }) {
    return (
        <div className={styles.clinicalNeedsSection} id={id}>
            <div className={styles.sideBar}>
                <SectionBadge><PiHandHeartFill /> Why OSSTEC</SectionBadge>
                <h2>Clinical Needs & <br /> Future of Knee Implants</h2>
                <div className={styles.imageContainer}>
                    <div className={styles.text}>
                        <p>“More and more patients require partial knee replacements, and it is critical to achieve a solution that does not loosen and can maintain bone quality to allow patients to continue living active, happy lives.”
                            <br />
                            Mr. Alex Liddle, DPhil FRCS(Orth)</p>
                    </div>
                    <CoverImage src="/images/headshots/AL.jpg" alt="Alex Liddle" style={{ boxShadow: 'var(--shadow-high)' }} />
                </div>
            </div>
            <div className={styles.grid}>
                {clinicalNeedsData.map((item, index) => {
                    return (
                        <StatDetailCard key={index} {...item} {...item.stat} />
                    )
                }
                )}
            </div>
        </div>
    )
}