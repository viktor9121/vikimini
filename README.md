# Viki Mini — Web PWA prototype

This repository contains the Viki Mini web prototype (React + Three.js + TensorFlow.js + face-api.js). The app is an on-device PWA that runs in the browser and provides: Viki 3D avatar, control panel, face enrollment & recognition (face-api.js), object detection (coco-ssd), OCR (Tesseract.js), simple voice enrollment (Meyda MFCC), teach-mode and consent flows.

Important notes
- All processing is on-device by default. No uploads are performed without explicit consent.
- Face recognition requires the face-api.js model files. See instructions below.

Quick start (recommended for phone use)
1. Open the repository and use a hosting service (GitHub Pages / Netlify) or run locally with Node.
2. To run locally (developer machine):
   - Install Node 18+ and npm.
   - Run:
     ```bash
     npm install
     npm run dev -- --host
     ```
   - Open the printed local IP address on your phone (same Wi‑Fi network) and allow camera/microphone.

Models (face-api.js)
- face-api.js models are not included in the repo due to size. Download the models and place them into `public/models/`.
- Model URL: https://justadudewhohacks.github.io/face-api.js/models/

Files included
- Vite + React application files (src/, public/)
- modules/ for face/object/audio handling
- README with quick test checklist

If you want, I can also produce a hosted demo (CodeSandbox) and a ZIP archive. For now I will push the code into a branch `vikimini/init` — open a Pull Request to review and merge into main.

Contact
- This commit was prepared automatically by an assistant. If anything needs to be changed, open an issue or comment on the PR.
