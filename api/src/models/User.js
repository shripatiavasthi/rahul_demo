import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    accountId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    profile: {
      firstName: String,
      lastName: String,
      middleName: String,
      firmName: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
      lawyerName: String,
      licenseNumber: String,
      jurisdictionType: String,
      accountType: String,
      paymentMethod: String,
      cardholderName: String,
      cardNumberLast4: String,
      authorizationUploaded: {
        type: Boolean,
        default: false,
      },
    },
    roles: {
      type: [String],
      default: ['user'],
    },
  },
  {
    timestamps: true,
  },
)

export const User = mongoose.model('User', userSchema)
