import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'

function App() {

  return (
      <Canvas>
        <Sky sunPosition={[100, 100, 0]}/>
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
  )
}

export default App
