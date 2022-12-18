import { PointerLockControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function FPV() {
  const { camera, gl } = useThree()

  const { domElement } = gl
  return (
    <PointerLockControls
      args={[camera, domElement]}
    />
  )
}
