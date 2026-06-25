import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import { User } from '../models/User.js'

export async function authenticate(req, res, next) {
  const authorization = req.headers.authorization

  if (!authorization?.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Authentication token is missing.',
    })
  }

  const token = authorization.slice(7)

  try {
    const payload = jwt.verify(token, env.jwtSecret)
    const user = await User.findById(payload.sub).select('-passwordHash')

    if (!user) {
      return res.status(401).json({
        message: 'Authentication token is no longer valid.',
      })
    }

    req.user = user
    return next()
  } catch {
    return res.status(401).json({
      message: 'Authentication token is invalid or expired.',
    })
  }
}

export function authorize(...roles) {
  return (req, res, next) => {
    const hasAccess = roles.some((role) => req.user?.roles?.includes(role))

    if (!hasAccess) {
      return res.status(403).json({
        message: 'You are not authorized to access this resource.',
      })
    }

    return next()
  }
}
