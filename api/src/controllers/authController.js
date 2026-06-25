import bcrypt from 'bcryptjs'
import { User } from '../models/User.js'
import { signToken } from '../utils/token.js'

function sanitizeUser(user) {
  return {
    id: user._id.toString(),
    accountId: user.accountId,
    userName: user.userName,
    email: user.email,
    roles: user.roles,
    profile: user.profile,
  }
}

export async function register(req, res) {
  const {
    accountId,
    userName,
    email,
    password,
    firstName,
    lastName,
    middleName,
    firmName,
    city,
    state,
    postalCode,
    country,
    lawyerName,
    licenseNumber,
    jurisdictionType,
    accountType,
    paymentMethod,
    cardholderName,
    cardNumber,
    authorizationUploaded,
  } = req.body

  if (!accountId || !userName || !email || !password) {
    return res.status(400).json({
      message: 'Account ID, username, email, and password are required.',
    })
  }

  const existingUser = await User.findOne({
    $or: [{ accountId }, { userName }, { email }],
  })

  if (existingUser) {
    return res.status(409).json({
      message: 'A user with this account ID, username, or email already exists.',
    })
  }

  const passwordHash = await bcrypt.hash(password, 12)

  const user = await User.create({
    accountId,
    userName,
    email,
    passwordHash,
    profile: {
      firstName,
      lastName,
      middleName,
      firmName,
      city,
      state,
      postalCode,
      country,
      lawyerName,
      licenseNumber,
      jurisdictionType,
      accountType,
      paymentMethod,
      cardholderName,
      cardNumberLast4: cardNumber ? String(cardNumber).slice(-4) : '',
      authorizationUploaded: Boolean(authorizationUploaded),
    },
  })

  const token = signToken(user)

  return res.status(201).json({
    message: 'Account created successfully.',
    token,
    user: sanitizeUser(user),
  })
}

export async function login(req, res) {
  const { accountId, userName, password } = req.body

  if (!accountId || !userName || !password) {
    return res.status(400).json({
      message: 'Account ID, username, and password are required.',
    })
  }

  const user = await User.findOne({ accountId, userName })

  if (!user) {
    return res.status(401).json({
      message: 'Invalid account ID, username, or password.',
    })
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash)

  if (!passwordMatches) {
    return res.status(401).json({
      message: 'Invalid account ID, username, or password.',
    })
  }

  const token = signToken(user)

  return res.status(200).json({
    message: 'Login successful.',
    token,
    user: sanitizeUser(user),
  })
}

export async function me(req, res) {
  return res.status(200).json({
    user: sanitizeUser(req.user),
  })
}
