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
                        <p>“Cementless Unicompartmental knee replacement offers advantages over cemented techniques, with improved workflows, survival, and clinical outcomes. OSSTEC&apos;s 3D printing technology enhances fixation, marking an exciting advancement in knee replacement surgery.”
                            <br />
                            Mr. Alex Liddle, DPhil FRCS(Orth)
                        </p>
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
