import { Suspense } from 'react'
import React, { useRef } from 'react'
import { Stage, useGLTF } from '@react-three/drei'

const ShoeModel = () => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

const ShoeComponent = () => {
  return (
    <Suspense fallback={null}>
      <Stage
        contactShadow // Optional: creates a contactshadow underneath the content (default=true)
        shadows // Optional: lights cast shadow (default=true)
        adjustCamera // Optional: zooms the content in (default=true)
        intensity={1} // Optional: light intensity (default=1)
        environment="city" // Optional: environment (default=city)
        // preset="portrait" // Optional: rembrandt (default) | portrait | upfront | soft
      >
        <ShoeModel/>
      </Stage>
    </Suspense>
  )
}

useGLTF.preload('/shoe.gltf')

export default ShoeComponent;