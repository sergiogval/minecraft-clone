import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player.jsx'
import { Cubes } from './components/Cubes.jsx'

const App = () => {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[80, 0, 0]} />
        <ambientLight intensity={1} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>

    </>
  )
}

export default App
