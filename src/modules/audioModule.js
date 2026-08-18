import Meyda from 'meyda'
import localforage from 'localforage'
let audioCtx, source, analyzer
export async function startAudioCapture(){
  audioCtx = new (window.AudioContext||window.webkitAudioContext)()
  const stream = await navigator.mediaDevices.getUserMedia({audio:true})
  source = audioCtx.createMediaStreamSource(stream)
  analyzer = Meyda.createMeydaAnalyzer({audioContext:audioCtx, source:source, featureExtractors:['mfcc'], bufferSize:512, callback:()=>{}})
  analyzer.start()
  return stream
}
export function getMFCC(){ if(!analyzer) return null; return analyzer.get('mfcc') }
export async function stopAudioCapture(stream){ stream.getTracks().forEach(t=>t.stop()); analyzer?.stop(); audioCtx?.close() }
