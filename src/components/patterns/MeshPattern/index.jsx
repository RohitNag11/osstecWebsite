import Image from "next/image";
import styles from "./MeshPattern.module.scss";

export default function MeshPattern({ layers = 4 }) {
    const images = Array.from({ length: layers }, (_, i) =>
        <div
            key={i}
            className={styles.meshPatternLayer}
            style={{
                transform: `rotate(${i * 45}deg)`
            }}
        >
            <Image
                key={i}
                src="./images/patterns/mesh.svg"
                alt="Mesh Pattern"
                fill
            />
        </div>
    );
    return (
        <div className={styles.meshPatternContainer}>
            {images}
        </div>
    )
}
