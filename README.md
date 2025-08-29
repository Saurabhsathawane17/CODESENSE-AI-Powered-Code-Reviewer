# CODESENSE – AI-Powered Code Reviewer

## 📌 Overview
CODESENSE is an **AI-powered code review system** built with the **MERN stack** and integrated with **Google Generative AI (Gemini API)**.  
The application allows users to submit their code for review. The AI analyzes it, identifies errors, and suggests improvements.  
It also provides **syntax highlighting, Markdown formatting, and real-time feedback** to enhance the developer experience.

This project covers the **full-stack workflow**, including:
- Backend API development with **Node.js & Express**
- AI integration using **Google Gemini API**
- Frontend interface built with **React**
- Syntax highlighting using **Prism.js**
- Editable code input with **React Simple Code Editor**

---

## 🚀 Features
- AI-driven code analysis and suggestions
- Handles up to **10,000 lines** of code
- Syntax highlighting with **PrismJS**
- Editable code input directly in the browser
- Real-time AI feedback rendered with **react-markdown**
- Secure API key storage via `.env`
- CORS-enabled backend for smooth frontend-backend communication

---

## 🛠️ Tech Stack
**Frontend:** React (Vite), PrismJS, React Simple Code Editor, Axios, React Markdown  
**Backend:** Node.js, Express, CORS, dotenv  
**AI Integration:** Google Generative AI (Gemini API)  
**Tools:** Postman for API testing, Flexbox for layout styling

---

## 📂 Project Structure
CODESENSE/
│
├── backend/
│ ├── routes/
│ │ └── ai.routes.js
│ ├── controllers/
│ │ └── ai.controller.js
│ ├── services/
│ │ └── ai.services.js
│ ├── .env
│ ├── app.js / server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── index.js
│
└── README.md
---
## Backend Setup
- cd backend
- npm init -y
- npm install express cors dotenv @google/generative-ai
- npm install nodemon --save-dev

  Create .env file:
  - GOOGLE_GEMINI_KEY=your_api_key_here
  Start backend:
  - npx nodemon server.js

## AI Integration
- Visit Google AI Studio
- Generate an API key and add it to .env
- Create services/ai.services.js and paste the Gemini API integration code
- Configure backend routes in ai.routes.js and controllers in ai.controller.js

## Frontend Setup
- cd ../frontend
- npm create vite@latest
- npm install prismjs react-simple-code-editor axios react-markdown
- npm run dev
## 🖥️ Usage
- Start backend (npx nodemon server.js)
- Start frontend (npm run dev)
- Enter code into the editor and click Review
- View AI feedback with syntax highlighting and Markdown formatting

## 📌 Development Journey & Key Points
- Backend First Approach: Started by building an Express server with a test route, verified using Postman.
- AI Integration: Used Google Gemini API, storing API keys securely in .env and loading with dotenv.
- Service-Controller-Route Structure: Clean separation of AI logic, request handling, and API routing.
- Postman Testing: Ensured AI could handle prompts and return meaningful code reviews.
- Frontend UI: Created with React, styled with CSS/Flexbox for a left code editor pane and right feedback pane.
- Syntax Highlighting: Integrated PrismJS and React Simple Code Editor for editable, highlighted code input.
- Markdown Rendering: Used react-markdown for nicely formatted AI feedback.
- Error Handling & Debugging: Addressed issues like missing imports, CORS errors, and incorrect API key usage.

## Results
<img width="1911" height="967" alt="Screenshot 2025-08-09 193237" src="https://github.com/user-attachments/assets/e4082dd0-2032-4571-a46c-259ca0dc38d1" />

<img width="1909" height="967" alt="Screenshot 2025-08-09 193412" src="https://github.com/user-attachments/assets/d6025809-a586-4e38-be34-c51beb5eed86" />

