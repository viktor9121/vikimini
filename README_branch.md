# Viki Mini — Web PWA prototype

This repository contains the Viki Mini web prototype (React + Three.js + TensorFlow.js + face-api.js). The app is an on-device PWA that runs in the browser and provides: Viki 3D avatar, control panel, face enrollment & recognition (face-api.js), object detection (coco-ssd), OCR (Tesseract.js), simple voice enrollment (Meyda MFCC), teach-mode and consent flows.

Important notes
- All processing is on-device by default. No uploads are performed without explicit consent.
- Face recognition uses the face-api.js models; by default the app loads them from the public CDN. If you prefer local models, download them from the link below into `public/models/`.

Quick start (phone - recommended)
1. Open the repository in GitHub and click the green "Code" button to download ZIP, or clone it on a machine.
2. Install Node.js (if running locally) and run:
   npm install
   npm run dev -- --host
3. Open the printed local IP (or use GitHub Pages / Netlify for hosting) on your phone (same Wi‑Fi) and allow camera/microphone.

Models (face-api.js)
- CDN models: https://justadudewhohacks.github.io/face-api.js/models/
- To use local models: download the entire folder and place it in public/models/ before running.

Files added in branch vikimini/init
- full src/ (components + modules)
- public/manifest + index.html
- package.json, vite.config.js, .gitignore

How to test quickly
- Open on phone, allow camera/mic. Use Enroll face to capture samples, then show a different face to see lock behavior.

If you want a hosted demo (CodeSandbox) or a signed iOS build later, tell me and I'll prepare CI/build steps.
