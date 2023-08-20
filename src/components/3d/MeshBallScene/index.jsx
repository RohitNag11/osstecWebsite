"use client"

import { Canvas } from "@react-three/fiber"
import { SceneWrapper } from "../helpers"
import { useState, useEffect, Suspense } from "react"
import { MeshBall } from "./MeshBall"
import { throttle } from 'lodash';
import { useMemo } from "react"
import * as THREE from "three";

function MeshBallScene({ mobile = false, ...props }) {
    const canvasStyles = {
        width: `100%`,
        height: `100%`,
        pointerEvents: 'none'
    }
    // State to store scroll position
    const [scrollY, setScrollY] = useState(0);
    const scale = mobile ? 1 : 2;
    const radius = useMemo(() => 1, [])
    const posInit = useMemo(() => [mobile ? 0 : 4, 0, -2.7], [mobile])

    const customMaterial = useMemo(() => new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide,
    }), []);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const fractionOfViewportHeight = window.scrollY / window.innerHeight;
            setScrollY(fractionOfViewportHeight);
        }, 100);  // Execute once every 100ms

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <SceneWrapper
            position="relative"
        >
            <Canvas
                style={{ canvasStyles }}
                camera={{ position: [0, 30, 0], fov: 10 }}
                dpr={[2, 1.5]}
            >
                {/* <axesHelper args={[1]} /> */}
                <ambientLight intensity={10} />
                <spotLight
                    position={[10, 10, 10]}
                    intensity={50}
                />
                <Suspense
                    fallback={
                        <mesh
                            material={customMaterial}
                            scale={[scale, scale, scale]}
                            position={posInit}
                        >
                            <sphereGeometry args={[radius, 64, 64]} />
                        </mesh>
                    }
                >
                    <MeshBall
                        scrollY={scrollY}
                        scale={[scale, scale, scale]}
                        mobile={mobile}
                        radius={radius}
                        material={customMaterial}
                        posInit={posInit}
                        {...props}
                    />
                </Suspense>
            </Canvas>
        </SceneWrapper>
    )
}

export default MeshBallScene