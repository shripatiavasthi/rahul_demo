# API Setup

## Environment

Copy `.env.example` to `.env` and replace `MONGODB_URI` with your actual MongoDB connection string.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Auth Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

## JWT Authorization

Send the token as:

```http
Authorization: Bearer <jwt-token>
```
