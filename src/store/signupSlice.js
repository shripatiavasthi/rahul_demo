import { createSlice } from '@reduxjs/toolkit'

export const signupInitialValues = {
  firstName: '',
  lastName: '',
  middleName: '',
  firmName: '',
  addressSearch: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  lawyerName: '',
  licenseNumber: '',
  jurisdictionType: '',
  accountType: '',
  emailAddress: '',
  mobileNumber: '',
  createPassword: '',
  confirmPassword: '',
  cardholderName: '',
  cardNumber: '',
  paymentMethod: 'credit-card',
  authorizationUploaded: false,
  accountId: '',
  userName: '',
  email: '',
  password: '',
}

const initialState = {
  currentStep: 1,
  values: signupInitialValues,
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setCurrentStep(state, action) {
      state.currentStep = action.payload
    },
    setSignupField(state, action) {
      state.values[action.payload.name] = action.payload.value
    },
    setSignupValues(state, action) {
      state.values = {
        ...state.values,
        ...action.payload,
      }
    },
    resetSignup() {
      return initialState
    },
  },
})

export const {
  setCurrentStep,
  setSignupField,
  setSignupValues,
  resetSignup,
} = signupSlice.actions
export default signupSlice.reducer
