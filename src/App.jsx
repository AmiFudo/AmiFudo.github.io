import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Exprience } from './components/Exprience'

function App() {

  return (
    <Canvas camera={{position: [0,5,10]}}>
      <Exprience />
    </Canvas>
  )
  
}

export default App
