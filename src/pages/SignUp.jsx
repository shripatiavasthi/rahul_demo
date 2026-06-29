import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AccountCreationModal from '../components/AccountCreationModal'
import AppButton from '../components/AppButton'
import AuthErrorAlert from '../components/AuthErrorAlert'
import AuthHero from '../components/AuthHero'
import FormInput from '../components/FormInput'
import { registerUser } from '../lib/api'
import {
  resetSignup,
  setCurrentStep,
  setSignupField,
  setSignupValues,
} from '../store/signupSlice'

const AUTHORIZATION_TEMPLATE = [
  'Authorization Form',
  '',
  'I hereby authorize the legal team to process my file and related registration details.',
  '',
  'Client Name: _______________________________',
  'Date: _____________________________________',
  'Signature: _________________________________',
].join('\n')

function downloadTextFile(content, fileName) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const blobUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = blobUrl
  link.download = fileName
  link.click()
  URL.revokeObjectURL(blobUrl)
}

function hasValue(value) {
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value)
}

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const viewportRef = useRef(null)
  const { currentStep, values } = useSelector((state) => state.signup)
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [credentialsText, setCredentialsText] = useState('')
  const [credentialsFileName, setCredentialsFileName] = useState('login-details.txt')
  const [scrollIndicator, setScrollIndicator] = useState({
    height: 20,
    top: 0,
  })

  useEffect(() => {
    const viewportElement = viewportRef.current

    if (!viewportElement || currentStep !== 1) {
      return undefined
    }

    const updateScrollIndicator = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewportElement
      const maxScroll = scrollHeight - clientHeight

      if (maxScroll <= 0) {
        setScrollIndicator({
          height: 100,
          top: 0,
        })
        return
      }

      const heightPercent = Math.max((clientHeight / scrollHeight) * 100, 18)
      const maxTopPercent = 100 - heightPercent
      const topPercent = (scrollTop / maxScroll) * maxTopPercent

      setScrollIndicator({
        height: heightPercent,
        top: topPercent,
      })
    }

    updateScrollIndicator()
    viewportElement.addEventListener('scroll', updateScrollIndicator)
    window.addEventListener('resize', updateScrollIndicator)

    return () => {
      viewportElement.removeEventListener('scroll', updateScrollIndicator)
      window.removeEventListener('resize', updateScrollIndicator)
    }
  }, [currentStep])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitError('')
    dispatch(setCurrentStep(Math.min(currentStep + 1, 4)))
  }

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target

    dispatch(
      setSignupField({
        name,
        value: type === 'checkbox' ? checked : value,
      }),
    )
    setSubmitError('')
  }

  const handleFinalSubmit = async (event) => {
    event.preventDefault()

    if (!values.authorizationUploaded) {
      setSubmitError('Please upload the authorization form before submitting.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await registerUser({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        middleName: values.middleName.trim(),
        firmName: values.firmName.trim(),
        addressSearch: values.addressSearch.trim(),
        city: values.city.trim(),
        state: values.state.trim(),
        postalCode: values.postalCode.trim(),
        country: values.country.trim(),
        lawyerName: values.lawyerName.trim(),
        licenseNumber: values.licenseNumber.trim(),
        jurisdictionType: values.jurisdictionType,
        accountType: values.accountType,
        authorizationUploaded: values.authorizationUploaded,
      })

      const nextCredentialsText = response.credentialsText || ''
      const nextCredentialsFileName =
        response.credentialsFileName || 'login-details.txt'

      setCredentialsText(nextCredentialsText)
      setCredentialsFileName(nextCredentialsFileName)

      if (nextCredentialsText) {
        downloadTextFile(nextCredentialsText, nextCredentialsFileName)
      }

      setSubmissionMessage(
        'Your account has been created successfully. Your login details text file has been downloaded.',
      )
      setSubmissionStatus('success')
    } catch (error) {
      setSubmissionMessage(
        error.message || 'Your account creation has failed. Please go back and try again.',
      )
      setSubmissionStatus('failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleModalClose = () => {
    const wasSuccessful = submissionStatus === 'success'
    setSubmissionStatus(null)

    if (wasSuccessful) {
      dispatch(resetSignup())
      navigate('/login')
    }
  }

  const isStepOneComplete = [
    values.firstName,
    values.lastName,
    values.firmName,
    values.addressSearch,
    values.city,
    values.state,
    values.postalCode,
    values.country,
  ].every(hasValue)

  const isStepTwoComplete = [
    values.lawyerName,
    values.licenseNumber,
    values.jurisdictionType,
    values.accountType,
  ].every(hasValue)

  const isStepThreeComplete = [
    values.paymentMethod,
    values.cardholderName,
    values.cardNumber,
  ].every(hasValue)

  const isStepFourComplete = values.authorizationUploaded

  return (
    <main className="signup-shell">
      <section className="signup-card" aria-label="Sign up screen">
        <AuthHero />

        <section className="signup-panel signup-panel--form">
          <div className="signup-form-header">
            <h2>Sign Up</h2>
            <p>Create your account in 4 steps</p>
          </div>

          {currentStep === 1 ? (
            <form className="signup-form-screen" onSubmit={handleSubmit}>
              <div className="signup-step-row" aria-label="Current sign up step">
                <div className="signup-step-badge">
                  <div className="signup-step-badge__ring">
                    <span>1</span>
                  </div>
                </div>
                <div className="signup-step-copy">
                  <span className="signup-step-copy__label">Step 1</span>
                  <strong>Personal Details</strong>
                </div>
              </div>

                <div className="signup-form-screen__body">
                  <div className="signup-form-screen__viewport" ref={viewportRef}>
                    <div className="signup-form-grid signup-form-grid--two">
                      <FormInput
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        hideLabel
                        placeholder="First Name*"
                        value={values.firstName}
                        onChange={handleFieldChange}
                      />

                      <FormInput
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        hideLabel
                        placeholder="Last Name*"
                        value={values.lastName}
                        onChange={handleFieldChange}
                      />
                    </div>

                    <FormInput
                      id="middleName"
                      name="middleName"
                      label="Middle Name"
                      hideLabel
                      placeholder="Middle Name"
                      value={values.middleName}
                      onChange={handleFieldChange}
                    />

                    <FormInput
                      id="firmName"
                      name="firmName"
                      label="Firm or Office Name"
                      hideLabel
                      placeholder="Firm/Office Name*"
                      value={values.firmName}
                      onChange={handleFieldChange}
                    />

                    <div className="signup-address-block">
                      <div className="signup-address-block__header">
                        <span>Address*</span>
                        <AppButton
                          type="button"
                          variant="text"
                          className="signup-address-block__action"
                        >
                          + Add Address Manually
                        </AppButton>
                      </div>

                      <FormInput
                        id="addressSearch"
                        name="addressSearch"
                        label="Search by postal code or address"
                        hideLabel
                        placeholder="Search by Postal Code or address e.g. 17/1"
                        value={values.addressSearch}
                        onChange={handleFieldChange}
                      />
                    </div>

                    <div className="signup-form-grid signup-form-grid--two signup-form-grid--compact">
                      <FormInput
                        id="city"
                        name="city"
                        label="City"
                        hideLabel
                        placeholder="City*"
                        value={values.city}
                        onChange={handleFieldChange}
                      />

                      <FormInput
                        id="state"
                        name="state"
                        label="State"
                        hideLabel
                        placeholder="State*"
                        value={values.state}
                        onChange={handleFieldChange}
                      />
                    </div>

                    <div className="signup-form-grid signup-form-grid--two signup-form-grid--compact">
                      <FormInput
                        id="postalCode"
                        name="postalCode"
                        label="Postal Code"
                        hideLabel
                        placeholder="Postal Code*"
                        value={values.postalCode}
                        onChange={handleFieldChange}
                      />

                      <FormInput
                        id="country"
                        name="country"
                        label="Country"
                        hideLabel
                        placeholder="Country*"
                        value={values.country}
                        onChange={handleFieldChange}
                      />
                    </div>
                  </div>

                <div className="signup-form-screen__scroll" aria-hidden="true">
                  <span
                    className="signup-form-screen__scroll-thumb"
                    style={{
                      height: `${scrollIndicator.height}%`,
                      transform: `translateY(${scrollIndicator.top}%)`,
                    }}
                  />
                </div>
              </div>

              <AppButton className="signup-panel__button" type="submit" disabled={!isStepOneComplete}>
                Next
              </AppButton>
            </form>
          ) : currentStep === 2 ? (
            <form
              className="signup-form-screen signup-form-screen--step-two"
              onSubmit={handleSubmit}
            >
              <div className="signup-step-row" aria-label="Current sign up step">
                <div className="signup-step-badge">
                  <div className="signup-step-badge__ring signup-step-badge__ring--step-two">
                    <span>2</span>
                  </div>
                </div>
                <div className="signup-step-copy">
                  <span className="signup-step-copy__label">Step 2</span>
                  <strong>Lawyer and Account Type</strong>
                </div>
              </div>

              <div className="signup-step-two">
                <FormInput
                  id="lawyerName"
                  name="lawyerName"
                  label="Lawyer Name"
                  hideLabel
                  placeholder="Lawyer Name*"
                  value={values.lawyerName}
                  onChange={handleFieldChange}
                />

                <FormInput
                  id="licenseNumber"
                  name="licenseNumber"
                  label="License number"
                  hideLabel
                  placeholder="License number*"
                  value={values.licenseNumber}
                  onChange={handleFieldChange}
                />

                <FormInput
                  id="jurisdictionType"
                  name="jurisdictionType"
                  label="Jurisdiction Type"
                  hideLabel
                  select
                  value={values.jurisdictionType}
                  onChange={handleFieldChange}
                  options={[
                    { value: '', label: 'Jurisdiction Type', disabled: true },
                    { value: 'State Bar', label: 'State Bar' },
                    { value: 'Supreme Court', label: 'Supreme Court' },
                    { value: 'High Court', label: 'High Court' },
                  ]}
                />

                <div className="signup-step-two__section">
                  <h3>Account Type</h3>
                </div>

                <FormInput
                  id="accountType"
                  name="accountType"
                  label="Type of Account"
                  hideLabel
                  select
                  value={values.accountType}
                  onChange={handleFieldChange}
                  options={[
                    { value: '', label: 'Type of Account', disabled: true },
                    { value: 'Individual Lawyer', label: 'Individual Lawyer' },
                    { value: 'Law Firm', label: 'Law Firm' },
                    { value: 'Corporate Legal Team', label: 'Corporate Legal Team' },
                  ]}
                />
              </div>

              <div className="signup-step-two__actions">
                <AppButton
                  className="signup-panel__button signup-panel__button--secondary"
                  variant="secondary"
                  type="button"
                  onClick={() => dispatch(setCurrentStep(1))}
                >
                  Back
                </AppButton>
                <AppButton className="signup-panel__button" type="submit" disabled={!isStepTwoComplete}>
                  Next
                </AppButton>
              </div>
            </form>
          ) : currentStep === 3 ? (
            <form
              className="signup-form-screen signup-form-screen--step-two signup-form-screen--payment"
              onSubmit={handleSubmit}
            >
              <div className="signup-step-row" aria-label="Current sign up step">
                <div className="signup-step-badge">
                  <div className="signup-step-badge__ring signup-step-badge__ring--step-three">
                    <span>3</span>
                  </div>
                </div>
                <div className="signup-step-copy">
                  <span className="signup-step-copy__label">Step 3</span>
                  <strong>Payment and Billing Details</strong>
                </div>
              </div>

              <div className="signup-step-payment">
                <div className="signup-step-payment__section">
                  <h3>Payment Method</h3>
                </div>

                <div className="signup-payment-methods" role="radiogroup" aria-label="Payment Method">
                  <button
                    type="button"
                    className={`signup-payment-card ${values.paymentMethod === 'credit-card' ? 'signup-payment-card--active' : ''}`}
                    onClick={() => dispatch(setSignupValues({ paymentMethod: 'credit-card' }))}
                    aria-pressed={values.paymentMethod === 'credit-card'}
                  >
                    <span className="signup-payment-card__icon signup-payment-card__icon--credit" aria-hidden="true">
                      <span className="signup-payment-card__credit-line" />
                      <span className="signup-payment-card__credit-dot" />
                    </span>
                    <span className="signup-payment-card__label">Credit Card</span>
                  </button>

                  <button
                    type="button"
                    className={`signup-payment-card ${values.paymentMethod === 'wallet' ? 'signup-payment-card--active' : ''}`}
                    onClick={() => dispatch(setSignupValues({ paymentMethod: 'wallet' }))}
                    aria-pressed={values.paymentMethod === 'wallet'}
                  >
                    <span className="signup-payment-card__icon signup-payment-card__icon--wallet" aria-hidden="true">
                      <span className="signup-payment-card__wallet-body" />
                      <span className="signup-payment-card__wallet-tab" />
                    </span>
                    <span className="signup-payment-card__label">Digital Wallet</span>
                  </button>

                  <button
                    type="button"
                    className={`signup-payment-card ${values.paymentMethod === 'debit' ? 'signup-payment-card--active' : ''}`}
                    onClick={() => dispatch(setSignupValues({ paymentMethod: 'debit' }))}
                    aria-pressed={values.paymentMethod === 'debit'}
                  >
                    <span className="signup-payment-card__icon signup-payment-card__icon--debit" aria-hidden="true">
                      <span className="signup-payment-card__debit-card" />
                      <span className="signup-payment-card__debit-shield" />
                    </span>
                    <span className="signup-payment-card__label">Direct Debit</span>
                  </button>

                  <button
                    type="button"
                    className={`signup-payment-card ${values.paymentMethod === 'upi' ? 'signup-payment-card--active signup-payment-card--upi' : 'signup-payment-card--upi'}`}
                    onClick={() => dispatch(setSignupValues({ paymentMethod: 'upi' }))}
                    aria-pressed={values.paymentMethod === 'upi'}
                  >
                    <span className="signup-payment-card__upi-mark" aria-hidden="true">
                      <span className="signup-payment-card__upi-logo">UPI</span>
                      <span className="signup-payment-card__upi-tag">UPI</span>
                    </span>
                  </button>
                </div>

                <FormInput
                  id="cardholderName"
                  name="cardholderName"
                  label="Cardholder Name"
                  hideLabel
                  placeholder="Cardholder Name*"
                  value={values.cardholderName}
                  onChange={handleFieldChange}
                  inputClassName="signup-input--payment"
                />

                <FormInput
                  id="cardNumber"
                  name="cardNumber"
                  label="Card Number"
                  hideLabel
                  placeholder="Card Number*"
                  value={values.cardNumber}
                  onChange={handleFieldChange}
                  className="signup-field--payment-brand"
                  inputClassName="signup-input--payment"
                  endAdornment={
                    <span className="signup-card-brand" aria-hidden="true">
                      <span className="signup-card-brand__circle signup-card-brand__circle--red" />
                      <span className="signup-card-brand__circle signup-card-brand__circle--yellow" />
                    </span>
                  }
                />
              </div>

              <div className="signup-step-two__actions">
                <AppButton
                  className="signup-panel__button signup-panel__button--secondary"
                  variant="secondary"
                  type="button"
                  onClick={() => dispatch(setCurrentStep(2))}
                >
                  Back
                </AppButton>
                <AppButton className="signup-panel__button" type="submit" disabled={!isStepThreeComplete}>
                  Next
                </AppButton>
              </div>
            </form>
          ) : (
            <form
              className="signup-form-screen signup-form-screen--step-two signup-form-screen--final"
              onSubmit={handleFinalSubmit}
            >
              <div className="signup-step-row" aria-label="Current sign up step">
                <div className="signup-step-badge">
                  <div className="signup-step-badge__ring signup-step-badge__ring--step-four">
                    <span>4</span>
                  </div>
                </div>
                <div className="signup-step-copy">
                  <span className="signup-step-copy__label">Step 4</span>
                  <strong>Authorization and Submission</strong>
                </div>
              </div>

              <div className="signup-step-final">
                <AuthErrorAlert message={submitError} className="auth-error-alert--compact" />

                <button
                  type="button"
                  className="signup-download-card"
                  onClick={() =>
                    downloadTextFile(
                      AUTHORIZATION_TEMPLATE,
                      'authorization-form-template.txt',
                    )
                  }
                >
                  <span className="signup-download-card__icon" aria-hidden="true">
                    <span className="signup-download-card__sheet" />
                    <span className="signup-download-card__line signup-download-card__line--top" />
                    <span className="signup-download-card__line signup-download-card__line--bottom" />
                  </span>
                  <span>Download The Authorization Form</span>
                </button>

                <div className="signup-step-final__section">
                  <h3>Authorization Form</h3>
                </div>

                <button
                  type="button"
                  className={`signup-upload-card ${values.authorizationUploaded ? 'signup-upload-card--active' : ''}`.trim()}
                  onClick={() => dispatch(setSignupValues({ authorizationUploaded: true }))}
                >
                  <span className="signup-upload-card__icon" aria-hidden="true">
                    <span className="signup-upload-card__file" />
                    <span className="signup-upload-card__file-fold" />
                    <span className="signup-upload-card__upload-ring" />
                    <span className="signup-upload-card__upload-arrow" />
                  </span>
                  <span>{values.authorizationUploaded ? 'Authorization form attached.' : 'Upload or drag and drop your form file here.'}</span>
                </button>

                {credentialsText ? (
                  <button
                    type="button"
                    className="signup-download-card signup-download-card--secondary"
                    onClick={() => downloadTextFile(credentialsText, credentialsFileName)}
                  >
                    <span className="signup-download-card__icon" aria-hidden="true">
                      <span className="signup-download-card__sheet" />
                      <span className="signup-download-card__line signup-download-card__line--top" />
                      <span className="signup-download-card__line signup-download-card__line--bottom" />
                    </span>
                    <span>Download Login Details (.txt)</span>
                  </button>
                ) : null}
              </div>

              <div className="signup-step-two__actions">
                <AppButton
                  className="signup-panel__button signup-panel__button--secondary"
                  variant="secondary"
                  type="button"
                  onClick={() => dispatch(setCurrentStep(3))}
                >
                  Back
                </AppButton>
                <AppButton
                  className="signup-panel__button"
                  type="submit"
                  disabled={!isStepFourComplete || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </AppButton>
              </div>
            </form>
          )}

          <p className="signup-panel__footer">
            Already have a account. <Link to="/login">Log in</Link>
          </p>
        </section>
      </section>

      <AccountCreationModal
        status={submissionStatus}
        message={submissionMessage}
        onClose={handleModalClose}
      />
    </main>
  )
}
