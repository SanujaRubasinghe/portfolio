import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Room } from '../HeroModels/Optimized-room'
import HeroLights from './HeroLights'


const HeroExperience = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <HeroLights />

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={false}
            />
            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
        </Canvas>
    )
}

export default HeroExperience