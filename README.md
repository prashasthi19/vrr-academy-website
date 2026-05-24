# VRR Academy

A modern, responsive coaching institute website for VRR Academy built with React, Node.js, and MongoDB.

## 🚀 Tech Stack

**Frontend:**
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Axios

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Express Validator

## 📋 Project Structure

```
vrr-academy/
├── frontend/          # React + Vite frontend
├── backend/          # Express.js backend API
└── README.md
```

## ⚙️ Installation

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Runs on: `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Runs on: `http://localhost:5000`

## 🔧 Environment Variables

**Frontend (.env):**
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=VRR Academy
```

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/vrr_academy
FRONTEND_URL=http://localhost:5173
```

## 📝 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/enquiry` | Submit enquiry form |
| GET | `/api/enquiry` | Get all enquiries |
| GET | `/api/enquiry/:id` | Get enquiry by ID |
| GET | `/api/health` | Check server status |

## 🎨 Color Palette

- Primary Blue: `#1D4ED8`
- Dark Blue: `#1E3A8A`
- Light Blue: `#DBEAFE`
- White: `#FFFFFF`
- Gray: `#F3F4F6`
- Dark Text: `#111827`

## 📱 Development Phases

- ✅ **Phase 1:** Project setup with Vite, Tailwind, and backend initialization
- ⏳ **Phase 2:** UI components development (Navbar, Hero, Courses, etc.)
- ⏳ **Phase 3:** Backend integration and API development
- ⏳ **Phase 4:** Form integration and testing
- ⏳ **Phase 5:** Performance optimization and SEO
- ⏳ **Phase 6:** Deployment to Vercel + Render

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies in both `frontend/` and `backend/`
3. Set up MongoDB locally or use MongoDB Atlas
4. Configure `.env` files
5. Run `npm run dev` in both folders
6. Open `http://localhost:5173` in browser

## 📧 API Response Format

**Success:**
```json
{
  "success": true,
  "message": "...",
  "data": {}
}
```

**Error:**
```json
{
  "success": false,
  "message": "...",
  "error": "..."
}
```

## 🔐 Security Features

- CORS configuration
- Input validation with express-validator
- Environment variable protection
- Error handling middleware
- Request rate limiting ready

## 📄 License

ISC
