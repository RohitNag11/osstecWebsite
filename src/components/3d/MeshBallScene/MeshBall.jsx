"use client"

import { useMemo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated as a, config } from '@react-spring/three';

const radius = 0.202;

// Reuse the material using useMemo
const customMaterial = new THREE.MeshPhysicalMaterial({
    color: '#E7F8FF',
    clearcoat: 1,
    clearcoatRoughness: 0,
    metalness: 0,
    roughness: 0,
    reflectivity: 1,
    envMapIntensity: 1,
    emissive: '#6A9DE4',
    emissiveIntensity: 1,
});

export function MeshBall({ scrollY, mobile, ...props }) {
    const { nodes } = useGLTF("/3d/meshBall.draco.glb");



    const { position, rotation } = useSpring({
        position: [0, 0, mobile ? 0 : radius * Math.PI * scrollY / 2],
        rotation: [scrollY * Math.PI / 2, 0, 0],
        config: config.molasses,
    });



    return (
        <group
            {...props}
            dispose={null}
            position={[mobile ? 0 : 0.4, radius / 2, -0.25]}
            rotation={[0, 0, 0]}
        >
            <Float
                floatingRange={[0, 0, 0]}
                rotationIntensity={2}
                // frustumCulled
                speed={1}
                enabled={!mobile}
            >
                {/* <axesHelper args={[1]} /> */}
                <a.group position={position} rotation={rotation}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_1.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_2.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_3.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_4.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_5.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_6.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_7.geometry}
                        material={customMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_0_8.geometry}
                        material={customMaterial}
                    />
                </a.group>
            </Float>
        </group >
    );
}

useGLTF.preload("/3d/meshBall.draco.glb");