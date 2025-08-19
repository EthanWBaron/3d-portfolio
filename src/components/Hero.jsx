import React from 'react'
import {Skateboarder} from "./Skateboarder.jsx";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";

const Hero = () => {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden"
            style={{
                backgroundImage: "url('/hero-bg.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}>

            <div className="absolute inset-0 bg-slate-900/50"></div>

            <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-5 items-center py-8 lg:py-0">

                <div className="lg:col-start-2 lg:col-span-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1 lg:-mt-16">
                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-lg font-bold leading-tight">
                            Ethan
                            <br/>
                            Baron
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-yellow-200 drop-shadow-lg"
                            style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                            Software Developer
                        </h2>
                        <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 drop-shadow-md leading-relaxed"
                           style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                            Creating C#, ReactJS and Kotlin Jetpack Compose Solutions
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-3 flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] px-2 sm:px-4 order-1 lg:order-2">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl h-full relative">
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
                                target={[0, 0.9, 0]}
                            />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <group position={[0, -0.5, 0]}>
                                <Skateboarder scale={1.75} />
                                {/* model from: https://www.artstation.com/artwork/Ga5KPN */}
                            </group>
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero