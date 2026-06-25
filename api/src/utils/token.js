import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export function signToken(user) {
  return jwt.sign(
    {
      sub: user._id.toString(),
      accountId: user.accountId,
      userName: user.userName,
      roles: user.roles,
    },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn,
    },
  )
}
