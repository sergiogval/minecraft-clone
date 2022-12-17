import { PointerLockControls} from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function FPV() {
  const { camera, gl } = useThree()
  gl.domElement = undefined
  return (
    <PointerLockControls
      args={[camera, gl.domElement]}
    />
  )
}
