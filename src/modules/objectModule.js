import * as cocoSsd from '@tensorflow-models/coco-ssd'
import Tesseract from 'tesseract.js'

let cocoModel = null
export async function loadObjectModel(){ if(!cocoModel) cocoModel = await cocoSsd.load(); return cocoModel }
export async function detectObjects(imageElement){ if(!cocoModel) await loadObjectModel(); return await cocoModel.detect(imageElement) }
export async function recognizeText(image){ const res = await Tesseract.recognize(image); return res.data.text }
