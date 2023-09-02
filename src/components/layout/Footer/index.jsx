import styles from './Footer.module.scss'
import { footerData } from '../../../../data'
import Link from 'next/link'
import { CoverImage } from '@/components/imageComponents'

const RenderContentItem = ({ item }) => {
    switch (item.type) {
        case 'internalLink':
            return <Link href={item.link} key={item.title} className={styles.link}>{item.title}</Link>;
        case 'externalLink':
            return <a href={item.link} key={item.title} className={styles.link}>{item.title}</a>;
        case 'text':
            return <div className={styles.text} key={item.title}>{item.title}</div>;
        default:
            return null;
    }
};

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerColumns}>
                <div key='main' className={styles.footerColumn}>
                    <div className={styles.logo}>
                        <CoverImage
                            {...footerData.about.logo} shimmerPlaceholder={false} placeholderColor='transparent' borderRadius='0'
                            objectFit='contain'
                        />
                    </div>
                </div>
                {footerData.columns.map(columnData => (
                    <div key={columnData.title} className={styles.footerColumn}>
                        <div className={styles.title}>
                            {columnData.title}
                        </div>
                        {columnData.content.map(item => <RenderContentItem key={item.title} item={item} />)}
                    </div>
                ))}
            </div>
            <div className={styles.bottom}>
                <div className={styles.column}>
                    <div className={styles.text}>
                        {footerData.about.companyNote}
                    </div>
                    <div className={styles.text}>
                        Company No: {footerData.about.companyNumber}
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.text}>
                        {footerData.about.copyrightNote}
                    </div>
                    <div className={styles.text}>
                        Designed and developed by <a href={footerData.about.designer.link} target='_blank'>{footerData.about.designer.name}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}