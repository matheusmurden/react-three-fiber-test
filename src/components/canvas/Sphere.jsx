import { Suspense } from 'react'
import { MeshDistortMaterial, Sphere, Stage } from '@react-three/drei'
import { a } from '@react-spring/three'
import { useUserPreferences } from '@react-three/a11y'

const M = a(MeshDistortMaterial)

const DarkSphere = () => {
  const { a11yPrefersState } = useUserPreferences()
  const color = '#a8a8a8';

  return (
    <Sphere args={[1, 40, 40]}>
      <M
        distort={a11yPrefersState.prefersReducedMotion ? 0 : 0.25}
        color={color}
      />
    </Sphere>
  )
}

const SphereComponent = () => {
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
        <DarkSphere />
      </Stage>
    </Suspense>
  )
}

export default SphereComponent
