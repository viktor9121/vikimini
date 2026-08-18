import React from 'react'

export default function ControlPanel({ onClose }){
  return (
    <div style={{position:'fixed', top:60, right:12, width:320, background:'#021', padding:12, borderRadius:8, boxShadow:'0 8px 30px rgba(0,0,0,0.6)'}}>
      <h3 style={{color:'#8ef6ff'}}>Control Panel</h3>
      <div style={{display:'grid', gap:8}}>
        <button onClick={()=>alert('Enroll face: open modal (use Enroll face button)')}>Enroll Face</button>
        <button onClick={()=>alert('Enroll voice: open modal (use Enroll voice)')}>Enroll Voice</button>
        <button onClick={()=>alert('Teach object: open camera teach mode')}>Teach Object</button>
        <button onClick={()=>alert('Manual Lock (demo)')}>Manual Lock</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
