import { OrbitControls, ScrollControls } from "@react-three/drei"
import Space from "./Space"
import { Overlay } from "./Overlay"

export const Exprience = () => {
    return (
        <>
            <pointLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                <Space />
            </ScrollControls>
        </>
    )
}