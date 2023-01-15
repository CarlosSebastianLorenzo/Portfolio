import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import Home from "../pages/Home";

const Model3D = () => {
    return (
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <color attach='background' args={['#111']} />
            <ScrollControls pages={4} damping={0.1}>
                <Experience />
                <Scroll html>
                    <Home/>
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
}

export default Model3D
