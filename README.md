# User Authentication API

## Features
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT

## How to Run
1. npm install
2. Create .env file
3. Add MONGO_URI and JWT_SECRET
4. Run: node server.js

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile (Protected)