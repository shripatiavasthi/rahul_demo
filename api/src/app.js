import cors from 'cors'
import express from 'express'
import routes from './routes/index.js'

export function createApp() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api', routes)

  app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({
      message: 'Internal server error.',
    })
  })

  return app
}
