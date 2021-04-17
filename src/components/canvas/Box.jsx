import { Suspense } from 'react'
import { MeshDistortMaterial, Stage } from '@react-three/drei'
import { a } from '@react-spring/three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'
import { extend } from '@react-three/fiber'
import { useUserPreferences } from '@react-three/a11y'

const M = a(MeshDistortMaterial)
extend({ RoundedBoxGeometry })

const RoundedDarkBox = () => {
  const { a11yPrefersState } = useUserPreferences()
  const color= '#a8a8a8'

  return (
    <mesh rotation={[45, 45, 45]}>
      <roundedBoxGeometry args={[1.5, 1.5, 1.5, 10, 0.1]} />
      <M
        distort={a11yPrefersState.prefersReducedMotion ? 0 : 0.4}
        color={color}
      />
    </mesh>
  )
}

const BoxComponent = () => {
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
        <RoundedDarkBox />
      </Stage>
    </Suspense>
  )
}
export default BoxComponent
