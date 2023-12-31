import styles from './Logo.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
    return (
        <Link href="/" className={styles.logoContainer}>
            <div className={styles.logo}>
                <span>
                    OSSTEC
                </span>
                <div className={styles.imageContainer}>
                    <Image src="/images/icons/logo_without_text.png" alt="OSSTEC Logo" fill />
                </div>
            </div>
        </Link>
    );
}

export default Logo