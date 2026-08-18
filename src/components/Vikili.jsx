import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, OrbitControls } from '@react-three/drei'

function Robot({ action='idle', speakLevel=0.6 }){
  return (
    <group>
      <mesh position={[0,0,0]}>
        <boxGeometry args={[1.2,1.4,0.6]} />
        <meshStandardMaterial color="#0f1724" emissive="#36f0ff" emissiveIntensity={action==='speak'?1.6:0.2} />
      </mesh>
      <group position={[0,1.1,0]}>
        <mesh position={[0,0,0.05]}>
          <boxGeometry args={[0.9,0.7,0.6]} />
          <meshStandardMaterial color="#071226" emissive="#36f0ff" emissiveIntensity={action==='speak'?1.2:0.15} />
        </mesh>
        <mesh position={[-0.23,0.02,0.33]}>
          <boxGeometry args={[0.22,0.14,0.02]} />
          <meshStandardMaterial emissive="#9be8ff" />
        </mesh>
        <mesh position={[0.23,0.02,0.33]}>
          <boxGeometry args={[0.22,0.14,0.02]} />
          <meshStandardMaterial emissive="#9be8ff" />
        </mesh>
      </group>
      <mesh position={[-0.95,0.45,0]}>
        <boxGeometry args={[0.26,0.9,0.2]} />
        <meshStandardMaterial color="#0b2030" />
      </mesh>
      <mesh position={[0.95,0.45,0]}>
        <boxGeometry args={[0.26,0.9,0.2]} />
        <meshStandardMaterial color="#0b2030" />
      </mesh>
    </group>
  )
}

export default function Vikili(){
  const [action, setAction] = useState('idle')
  const [speakLevel, setSpeakLevel] = useState(0.6)
  return (
    <div style={{width:'100%', maxWidth:980, height:520, margin:'0 auto', borderRadius:12, overflow:'hidden', boxShadow:'0 10px 40px rgba(0,0,0,0.6)'}}>
      <Canvas dpr={[1,1.5]} camera={{position:[0,1.4,3.2], fov:50}} style={{background:'#020617', height:'100%'}}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5,5,5]} intensity={0.7} />
        <pointLight position={[-5,3,5]} intensity={0.4} color="#ffd5ff" />
        <Robot action={action} speakLevel={speakLevel} />
        <Sparkles count={30} scale={[2.2,1.6,1]} noise={1} color="#25f8ff" />
        <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1.32,0]}>
          <planeGeometry args={[15,15]} />
          <meshStandardMaterial color="#030814" metalness={0.8} roughness={0.45} />
        </mesh>
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={window.innerWidth>800} maxPolarAngle={Math.PI/2.1} />
      </Canvas>

      <div style={{position:'absolute', right:18, top:20, display:'flex', gap:8}}>
        <button onClick={()=>setAction('run')}>🏃</button>
        <button onClick={()=>setAction('wave')}>👋</button>
        <button onClick={()=>setAction('dance')}>💃</button>
        <button onClick={()=>setAction('speak')}>💡</button>
        <button onClick={()=>setAction('idle')}>⛔</button>
      </div>
    </div>
  )
}
