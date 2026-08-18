import React, { useEffect, useState } from 'react'
import Vikili from './components/Vikili'
import ControlPanel from './components/ControlPanel'
import { loadFaceModels } from './modules/faceModule'

export default function App(){
  const [showControl, setShowControl] = useState(false)
  useEffect(()=>{ loadFaceModels().catch(()=>console.warn('face models not loaded — check public/models or CDN')) },[])
  return (
    <div>
      <header className="topbar">
        <h2 style={{margin:0, color:'#8ef6ff'}}>Viki Mini</h2>
        <div>
          <button onClick={()=>setShowControl(true)}>Control</button>
        </div>
      </header>

      <main style={{padding:16}}>
        <Vikili />
        <div style={{marginTop:12}}>
          <button id="enroll-face">Enroll face</button>
          <button id="teach-object" style={{marginLeft:8}}>Teach object</button>
          <button id="enroll-voice" style={{marginLeft:8}}>Enroll voice</button>
        </div>
      </main>

      {showControl && <ControlPanel onClose={()=>setShowControl(false)} />}
    </div>
  )
}
