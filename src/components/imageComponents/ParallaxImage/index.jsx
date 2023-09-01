import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const ParallaxImage = ({ src, alt = "Parallax Effect", layout = "fill", parallaxSpeed = 0.1 }) => {
    const outerRef = useRef(null);
    const parallaxRef = useRef(null);
    const [parentHeight, setParentHeight] = useState(0);
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        if (outerRef.current) {
            const height = outerRef.current.getBoundingClientRect().height;
            setParentHeight(height);
            const additionalHeight = height * (1 - parallaxSpeed);
            setOffsetTop(-additionalHeight);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const offset = parallaxRef.current.getBoundingClientRect().top;
            parallaxRef.current.style.transform = `translateY(${offset * parallaxSpeed}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [parallaxSpeed]);

    const totalHeight = parentHeight + 2 * parentHeight * (1 - parallaxSpeed);

    return (
        <div ref={outerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <div ref={parallaxRef} style={{ position: 'absolute', top: `${offsetTop}px`, left: 0, width: '100%', height: `${totalHeight}px` }}>
                <Image src={src} alt={alt} layout={layout} objectFit="cover" />
            </div>
        </div>
    );
};

export default ParallaxImage;