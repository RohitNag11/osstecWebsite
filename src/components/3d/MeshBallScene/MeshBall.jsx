import { Suspense, useMemo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useSpring, animated as a, config } from '@react-spring/three';

export function MeshBall({ posInit, material, scrollY, radius, mobile, ...props }) {
    const { nodes } = useGLTF("/3d/meshBall2.glb");

    const { position, rotation } = useSpring({
        position: [0, 0, mobile ? 0 : radius * Math.PI * scrollY],
        rotation: [scrollY * Math.PI / 2, 0, 0],
        config: config.molasses,
    });

    return (
        <group
            {...props}
            dispose={null}
            position={posInit}
            rotation={[0, 0, 0]}
        >
            <Float
                floatingRange={[0, 0, 0]}
                rotationIntensity={2}
                speed={1}
                enabled={!mobile}
            >
                {/* <axesHelper args={[1]} /> */}
                <a.group position={position} rotation={rotation}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={material}
                    />
                </a.group>
            </Float>
        </group >
    );
}

useGLTF.preload("/3d/meshBall2.glb");