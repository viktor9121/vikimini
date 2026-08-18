import * as faceapi from 'face-api.js'
import localforage from 'localforage'

export async function loadFaceModels(){
  const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models'
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
  ])
}

export async function enrollFace(label, inputElement){
  const detection = await faceapi.detectSingleFace(inputElement).withFaceLandmarks().withFaceDescriptor()
  if(!detection) throw new Error('No face detected')
  const descriptor = Array.from(detection.descriptor)
  const db = (await localforage.getItem('face_db')) || {}
  db[label] = db[label] || []
  db[label].push(descriptor)
  await localforage.setItem('face_db', db)
  return true
}

export async function recognizeFace(inputElement){
  const db = (await localforage.getItem('face_db')) || {}
  const labels = Object.keys(db)
  const query = await faceapi.detectSingleFace(inputElement).withFaceLandmarks().withFaceDescriptor()
  if(!query) return {label:null, distance:null}
  const qd = query.descriptor
  let best = {label:null, dist:1.0}
  for(const label of labels){
    for(const arr of db[label]){
      const dist = euclideanDistance(qd, Float32Array.from(arr))
      if(dist < best.dist) best = {label, dist}
    }
  }
  return best
}

function euclideanDistance(a,b){ let s=0; for(let i=0;i<a.length;i++){ const d=a[i]-b[i]; s+=d*d } return Math.sqrt(s) }
