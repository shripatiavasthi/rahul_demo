import dotenv from 'dotenv'

dotenv.config()

export const env = {
  port: Number(process.env.PORT) || 5000,
  mongoUri:
    process.env.MONGODB_URI ||
    'mongodb+srv://shripatiavasthi93:9873317094Talu@cluster0.7928kka.mongodb.net/demo?appName=Cluster0',
  jwtSecret: process.env.JWT_SECRET || 'replace-with-a-strong-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  clientUrls: (process.env.CLIENT_URLS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean),
}
