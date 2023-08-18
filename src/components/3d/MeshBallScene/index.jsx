"use client"

import { Canvas } from "@react-three/fiber"
import { SceneWrapper } from "../helpers"
import { useState, useEffect, Suspense } from "react"
import { MeshBall } from "./MeshBall"

function MeshBallScene({ mobile = false, ...props }) {
    const canvasStyles = {
        width: `100%`,
        height: `100%`,
    }

    // State to store scroll position
    const [scrollY, setScrollY] = useState(0);
    const scale = mobile ? 1 : 2;

    useEffect(() => {
        const handleScroll = () => {
            const fractionOfViewportHeight = window.scrollY / window.innerHeight;
            // fractionOfViewportHeight = Math.max(0, Math.min(1, fractionOfViewportHeight));
            setScrollY(fractionOfViewportHeight);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <SceneWrapper
            position="relative"
        >
            <Canvas
                // shadows
                style={{ canvasStyles }}
                camera={{ position: [0, 1, 0], fov: 30 }}
            >
                {/* <axesHelper args={[1]} /> */}
                <ambientLight intensity={0.2} />
                <spotLight position={[0.5, 2, 0.5]} intensity={5} castShadow />
                <mesh receiveShadow castShadow rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[100, 100]} scale={[100, 100, 100]} />
                    <shadowMaterial
                        transparent
                        opacity={0.2}
                        color={'#284E5E'} />
                </mesh>
                <Suspense fallback={null}>
                    <MeshBall
                        scrollY={scrollY}
                        scale={[scale, scale, scale]}
                        mobile={mobile}
                        {...props}
                    />
                </Suspense>
            </Canvas>
        </SceneWrapper>
    )
}

export default MeshBallScene