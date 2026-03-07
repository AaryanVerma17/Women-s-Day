# Here are your Instructions
# Voices of Her - Women's Day Tribute Wall

This project is a full-stack web application for Women's Day, allowing users to share, view, and celebrate tributes to inspiring women. It features a tribute wall, card generator, acts of appreciation, and profiles of inspiring women.

## Features
- Share heartfelt tributes to women in your life
- View and like tributes on the Tribute Wall
- Generate and download Women's Day cards
- Explore acts of appreciation and inspiring women profiles

## Tech Stack
- **Frontend:** React, TailwindCSS, Framer Motion
- **Backend:** FastAPI, MongoDB

## Running Locally

### Backend
1. Install Python dependencies:
   ```powershell
   pip install -r backend/requirements.txt
   ```
2. Set up your `.env` file in `backend/` with MongoDB connection details:
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=tribute_wall
   CORS_ORIGINS=http://localhost:3000
   ```
3. Start the backend server:
   ```powershell
   uvicorn backend.server:app --reload --port 8000
   ```

### Frontend
1. Install dependencies:
   ```powershell
   cd frontend
   yarn install
   ```
2. Start the frontend:
   ```powershell
   yarn start
   ```

## Deploying to Render

### Backend
- Create a new **Web Service** on Render
- Use `uvicorn backend.server:app --host 0.0.0.0 --port 8000` as the start command
- Add environment variables for MongoDB and CORS

### Frontend
- Create a new **Static Site** on Render
- Set build command: `yarn build`
- Set publish directory: `frontend/build`
- Update `REACT_APP_BACKEND_URL` in `.env` to your Render backend URL

## No Emergent.sh Traces
All references to emergent.sh, emergentagent.com, and related packages have been removed. The project is now fully independent and ready for open deployment.
