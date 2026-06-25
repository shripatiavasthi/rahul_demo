import { createApp } from './app.js'
import { connectDatabase } from './config/database.js'
import { env } from './config/env.js'

async function startServer() {
  await connectDatabase()

  const app = createApp()

  app.listen(env.port, () => {
    console.log(`API server listening on http://localhost:${env.port}`)
  })
}

startServer().catch((error) => {
  console.error('Failed to start API server', error)
  process.exit(1)
})
