import { Router } from 'express'
import authRoutes from './authRoutes.js'

const router = Router()

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
  })
})

router.use('/auth', authRoutes)

export default router
