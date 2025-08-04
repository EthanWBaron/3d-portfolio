import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Skateboarder(props) {
    const { nodes, materials } = useGLTF('/skateboarder.glb')
    const groupRef = useRef()

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.004
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.6}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0.002, 2.616, 0.003]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.Bunny}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.Skateboard}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/skateboarder.glb')