📊 SocialMediaContentAnalyzer

An AI-powered tool to analyze social media content.

Upload images (JPG, PNG) or PDFs, extract text via OCR, and instantly generate:
✨ Captions, 🔖 Hashtags, and 📈 Engagement tips — all in one clean dashboard.

🚀 Features

File Upload Support: Upload images (JPG, PNG, JPEG, PDF) up to 10MB.

OCR Extraction: Text extraction powered by Tesseract.js

AI Suggestions (Gemini API):

Auto-generated captions,
Recommended hashtags,
Engagement strategies

Clean UI: Built with React, Vite, and Lucide Icons.

One-Click Reset: Quickly reset workspace for a new file.

Deploy-ready: Easily host with GitHub Pages.

## 🛠️ Tech Stack  

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Tesseract.js](https://github.com/naptha/tesseract.js) for OCR  
- [Lucide Icons](https://lucide.dev/)  
- [Google Gemini API](https://ai.google.dev/) for AI captioning & tips  
- [PDF.js](https://mozilla.github.io/pdf.js/) for PDF text extraction  
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment  

---


## ⚡ Getting Started  

### 1. Clone the repository  
```bash
git clone https://github.com/Rudraksh-Agnihotri4/SocialMedia1.git
cd SocialMedia1/client
````
### 2. Install dependencies
```bash
npm install
````
### 3. Set up environment variables
```bash
VITE_API_BASE=http://localhost:5000
VITE_GEMINI_KEY=your_api_key_here
````
### 4. Run locally
```bash
npm run dev
````

📂 Project Structure
```bash
SocialMediaAnalyzer/
│── client/                 # React + Vite app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── utils/          # OCR & PDF utilities
│   │   ├── App.jsx         # App shell
│   │   ├── main.jsx        # Entry point
│   ├── public/             # Static assets
│   ├── vite.config.js      # Vite config
│   └── package.json
│
│── server/                 # Backend (API for Gemini)
│   ├── index.js
│   └── package.json
│
└── README.md
````


Live Link -->
https://rudraksh-agnihotri4.github.io/SocialMedia1/

🧑‍💻 Author
Rudraksh Agnihotri
https://www.linkedin.com/in/rudraksh-agnihotri-998398249





