import React from 'react'
import {Skateboarder} from "./Skateboarder.jsx";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";

const Hero = () => {
    return (
        <div
            className="relative h-screen w-full overflow-hidden"
            style={{
                backgroundImage: "url('/hero-bg.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}>

            <div className="absolute inset-0 bg-slate-900/50"></div>

            <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-7 items-center">

                <div className="lg:col-span-2 flex flex-col justify-center px-8 lg:px-16 space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg font-bold leading-tight">
                            Ethan
                            <br/>
                            Baron
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-yellow-200 drop-shadow-lg"
                            style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                            Software Developer
                        </h2>
                        <p className="text-gray-100 text-lg max-w-md mx-auto lg:mx-0 drop-shadow-md"
                           style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                            Creating C#, ReactJS and Kotlin Jetpack Compose Solutions
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-5 flex items-center justify-center h-full px-4 order-1 lg:order-2">
                    <div className="w-full max-w-2xl h-[500px] md:h-[600px] lg:h-[700px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

                        <Canvas
                            camera={{ position: [0, 0, 4], fov: 50 }}
                            className="w-full h-full"
                        >
                            <Environment preset="city" />
                            <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 4}
                                target={[0, 1.1, 0]}
                            />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <group position={[0, -0.5, 0]}>
                                <Skateboarder scale={1.2} />
                            </group>
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero