import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

export default function SignUp() {
  const viewportRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const [submissionAttempt, setSubmissionAttempt] = useState(0)
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
    setCurrentStep((step) => Math.min(step + 1, 4))
  }

  const handleFinalSubmit = (event) => {
    event.preventDefault()

    const nextAttempt = submissionAttempt + 1
    setSubmissionAttempt(nextAttempt)
    setSubmissionStatus(nextAttempt % 2 === 1 ? 'success' : 'failed')
  }

  return (
    <main className="signup-shell">
      <section className="signup-card" aria-label="Sign up screen">
        <aside className="signup-hero">
          <img
            className="signup-hero__background"
            src={heroImage}
            alt=""
            aria-hidden="true"
          />

          <div className="signup-hero__content">
            <div className="signup-hero__brand" aria-label="Logo">
              <span className="signup-hero__brand-mark" aria-hidden="true">
                <span className="signup-hero__brand-stroke signup-hero__brand-stroke--left" />
                <span className="signup-hero__brand-stroke signup-hero__brand-stroke--right" />
                <span className="signup-hero__brand-stroke signup-hero__brand-stroke--base" />
              </span>
              <span className="signup-hero__brand-text">Logo</span>
            </div>

            <h1>Welcome to Legal Tasks Management and Monitoring Software</h1>

            <p className="signup-hero__copy">
              Your centralized hub for managing legal tasks, tracking case
              progress, and optimizing workflows.
            </p>
          </div>
        </aside>

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
                    <label className="signup-field">
                      <span className="sr-only">First Name</span>
                      <input type="text" placeholder="First Name*" />
                    </label>

                    <label className="signup-field">
                      <span className="sr-only">Last Name</span>
                      <input type="text" placeholder="Last Name*" />
                    </label>
                  </div>

                  <label className="signup-field">
                    <span className="sr-only">Middle Name</span>
                    <input type="text" placeholder="Middle Name" />
                  </label>

                  <label className="signup-field">
                    <span className="sr-only">Firm or Office Name</span>
                    <input type="text" placeholder="Firm/Office Name*" />
                  </label>

                  <div className="signup-address-block">
                    <div className="signup-address-block__header">
                      <span>Address*</span>
                      <button type="button" className="signup-address-block__action">
                        + Add Address Manually
                      </button>
                    </div>

                    <label className="signup-field">
                      <span className="sr-only">
                        Search by postal code or address
                      </span>
                      <input
                        type="text"
                        placeholder="Search by Postal Code or address e.g. 17/1"
                      />
                    </label>
                  </div>

                  <div className="signup-form-grid signup-form-grid--two signup-form-grid--compact">
                    <label className="signup-field">
                      <span className="sr-only">City</span>
                      <input type="text" placeholder="City*" />
                    </label>

                    <label className="signup-field">
                      <span className="sr-only">State</span>
                      <input type="text" placeholder="State*" />
                    </label>
                  </div>

                  <div className="signup-form-grid signup-form-grid--two signup-form-grid--compact">
                    <label className="signup-field">
                      <span className="sr-only">Postal Code</span>
                      <input type="text" placeholder="Postal Code*" />
                    </label>

                    <label className="signup-field">
                      <span className="sr-only">Country</span>
                      <input type="text" placeholder="Country*" />
                    </label>
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

              <button className="signup-panel__button" type="submit">
                Next
              </button>
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
                <label className="signup-field">
                  <span className="sr-only">Lawyer Name</span>
                  <input type="text" placeholder="Lawyer Name*" />
                </label>

                <label className="signup-field">
                  <span className="sr-only">License number</span>
                  <input type="text" placeholder="License number*" />
                </label>

                <label className="signup-field signup-field--select">
                  <span className="sr-only">Jurisdiction Type</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Jurisdiction Type
                    </option>
                    <option>State Bar</option>
                    <option>Supreme Court</option>
                    <option>High Court</option>
                  </select>
                </label>

                <div className="signup-step-two__section">
                  <h3>Account Type</h3>
                </div>

                <label className="signup-field signup-field--select">
                  <span className="sr-only">Type of Account</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Type of Account
                    </option>
                    <option>Individual Lawyer</option>
                    <option>Law Firm</option>
                    <option>Corporate Legal Team</option>
                  </select>
                </label>
              </div>

              <div className="signup-step-two__actions">
                <button
                  className="signup-panel__button signup-panel__button--secondary"
                  type="button"
                  onClick={() => setCurrentStep(1)}
                >
                  Back
                </button>
                <button className="signup-panel__button" type="submit">
                  Next
                </button>
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
                    className={`signup-payment-card ${paymentMethod === 'credit-card' ? 'signup-payment-card--active' : ''}`}
                    onClick={() => setPaymentMethod('credit-card')}
                    aria-pressed={paymentMethod === 'credit-card'}
                  >
                    <span className="signup-payment-card__icon signup-payment-card__icon--credit" aria-hidden="true">
                      <span className="signup-payment-card__credit-line" />
                      <span className="signup-payment-card__credit-dot" />
                    </span>
                    <span className="signup-payment-card__label">Credit Card</span>
                  </button>

                  <button
                    type="button"
                    className={`signup-payment-card ${paymentMethod === 'wallet' ? 'signup-payment-card--active' : ''}`}
                    onClick={() => setPaymentMethod('wallet')}
                    aria-pressed={paymentMethod === 'wallet'}
                  >
                    <span className="signup-payment-card__icon signup-payment-card__icon--wallet" aria-hidden="true">
                      <span className="signup-payment-card__wallet-body" />
                      <span className="signup-payment-card__wallet-tab" />
                    </span>
                    <span className="signup-payment-card__label">Digital Wallet</span>
                  </button>

                  <button
                    type="button"
                    className={`signup-payment-card ${paymentMethod === 'debit' ? 'signup-payment-card--active' : ''}`}
                    onClick={() => setPaymentMethod('debit')}
                    aria-pressed={paymentMethod === 'debit'}
                  >
                    <span className="signup-payment-card__icon signup-payment-card__icon--debit" aria-hidden="true">
                      <span className="signup-payment-card__debit-card" />
                      <span className="signup-payment-card__debit-shield" />
                    </span>
                    <span className="signup-payment-card__label">Direct Debit</span>
                  </button>

                  <button
                    type="button"
                    className={`signup-payment-card ${paymentMethod === 'upi' ? 'signup-payment-card--active signup-payment-card--upi' : 'signup-payment-card--upi'}`}
                    onClick={() => setPaymentMethod('upi')}
                    aria-pressed={paymentMethod === 'upi'}
                  >
                    <span className="signup-payment-card__upi-mark" aria-hidden="true">
                      <span className="signup-payment-card__upi-logo">UPI</span>
                      <span className="signup-payment-card__upi-tag">UPI</span>
                    </span>
                  </button>
                </div>

                <label className="signup-field signup-field--payment">
                  <span className="sr-only">Cardholder Name</span>
                  <input type="text" placeholder="Cardholder Name*" />
                </label>

                <label className="signup-field signup-field--payment signup-field--payment-brand">
                  <span className="sr-only">Card Number</span>
                  <input type="text" placeholder="Card Number*" />
                  <span className="signup-card-brand" aria-hidden="true">
                    <span className="signup-card-brand__circle signup-card-brand__circle--red" />
                    <span className="signup-card-brand__circle signup-card-brand__circle--yellow" />
                  </span>
                </label>
              </div>

              <div className="signup-step-two__actions">
                <button
                  className="signup-panel__button signup-panel__button--secondary"
                  type="button"
                  onClick={() => setCurrentStep(2)}
                >
                  Back
                </button>
                <button className="signup-panel__button" type="submit">
                  Next
                </button>
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
                <button type="button" className="signup-download-card">
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

                <button type="button" className="signup-upload-card">
                  <span className="signup-upload-card__icon" aria-hidden="true">
                    <span className="signup-upload-card__file" />
                    <span className="signup-upload-card__file-fold" />
                    <span className="signup-upload-card__upload-ring" />
                    <span className="signup-upload-card__upload-arrow" />
                  </span>
                  <span>Upload or drag and drop your form file here.</span>
                </button>
              </div>

              <div className="signup-step-two__actions">
                <button
                  className="signup-panel__button signup-panel__button--secondary"
                  type="button"
                  onClick={() => setCurrentStep(3)}
                >
                  Back
                </button>
                <button className="signup-panel__button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}

          <p className="signup-panel__footer">
            Already have a account. <Link to="/login">Log in</Link>
          </p>
        </section>
      </section>

      {submissionStatus ? (
        <div className="signup-modal-backdrop" role="presentation">
          <section
            className={`signup-modal signup-modal--${submissionStatus}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-modal-title"
          >
            <p className="signup-modal__eyebrow">Account Creation confirmation</p>

            <div className="signup-modal__card">
              <div className="signup-modal__hero" aria-hidden="true">
                <span className="signup-modal__dot signup-modal__dot--one" />
                <span className="signup-modal__dot signup-modal__dot--two" />
                <span className="signup-modal__dot signup-modal__dot--three" />
                <span className="signup-modal__dot signup-modal__dot--four" />

                <div className="signup-modal__status-icon">
                  <span className="signup-modal__status-ring" />
                  {submissionStatus === 'success' ? (
                    <span className="signup-modal__status-mark signup-modal__status-mark--success" />
                  ) : (
                    <span className="signup-modal__status-mark signup-modal__status-mark--failed" />
                  )}
                </div>
              </div>

              <div className="signup-modal__body">
                <h3 id="signup-modal-title">
                  {submissionStatus === 'success'
                    ? 'Account created successfully'
                    : 'Sorry!'}
                </h3>
                <p>
                  {submissionStatus === 'success'
                    ? 'Your account has been created successfully. Please check your email for the login credentials we just sent you.'
                    : 'Your account creation has been failed. Please go back and try again'}
                </p>
                <button
                  type="button"
                  className="signup-modal__button"
                  onClick={() => setSubmissionStatus(null)}
                >
                  Okay
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  )
}
