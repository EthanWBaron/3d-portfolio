import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Skateboarder(props) {
    const groupRef = useRef()
    const { nodes, materials } = useGLTF('/skateboarder.glb')

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Bunny}
                position={[0.014, 1.091, 0.11]}
                scale={0.73}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.Skateboard}
                position={[-0.018, 0.352, 0.029]}
                scale={0.381}
            />
        </group>
    )
}