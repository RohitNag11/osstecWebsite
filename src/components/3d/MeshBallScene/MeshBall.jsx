"use client"

import { useMemo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated as a, config } from '@react-spring/three';
import { FlakesTexture } from 'three/addons/textures/FlakesTexture.js';

const normalMap3 = new THREE.CanvasTexture(new FlakesTexture());
normalMap3.wrapS = THREE.RepeatWrapping;
normalMap3.wrapT = THREE.RepeatWrapping;
normalMap3.repeat.x = 10;
normalMap3.repeat.y = 6;
normalMap3.anisotropy = 16;

export function MeshBall({ scrollY, mobile, ...props }) {
    const customMaterial = useMemo(() => new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide,
        normalMap: normalMap3,
        normalScale: new THREE.Vector2(0.15, 0.15),
    }), []);



    // const customMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    //     clearcoat: 1.0,
    //     clearcoatRoughness: 0.1,
    //     metalness: 0.9,
    //     roughness: 0.5,
    //     color: '#FFFFFF',
    //     normalMap: normalMap3,
    //     normalScale: new THREE.Vector2(0.15, 0.15),
    //     side: THREE.DoubleSide,
    // }), []);

    const radius = useMemo(() => 1, [])
    const { nodes, materials } = useGLTF("/3d/meshBall2.glb");

    const { position, rotation } = useSpring({
        position: [0, 0, mobile ? 0 : radius * Math.PI * scrollY],
        rotation: [scrollY * Math.PI / 2, 0, 0],
        config: config.molasses,
    });

    return (
        <group
            {...props}
            dispose={null}
            position={[mobile ? 0 : 4, 0, -2.7]}
            rotation={[0, 0, 0]}
        >
            <Float
                floatingRange={[0, 0, 0]}
                rotationIntensity={2}
                speed={1}
            // enabled={!mobile}
            >
                {/* <axesHelper args={[1]} /> */}
                <a.group position={position} rotation={rotation}>
                    {/* <mesh material={customMaterial}>
                        <sphereGeometry args={[radius, 64, 64]} />
                    </mesh> */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={customMaterial}
                    />
                </a.group>
            </Float>
        </group >
    );
}

useGLTF.preload("/3d/meshBall2.glb");