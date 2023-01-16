import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";

const Model3D = () => {
    return (
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <color attach='background' args={['ececec']} />
            <ScrollControls pages={4} damping={0.1}>
                <Experience />
                <Scroll html>
                    <h1>HOLA PAPÄ</h1>
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
}

export default Model3D
