import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

export default function SignUp() {
  const viewportRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(1)
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
          ) : (
            <form
              className="signup-form-screen signup-form-screen--step-two"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="signup-step-row" aria-label="Current sign up step">
                <div className="signup-step-badge">
                  <div className="signup-step-badge__ring signup-step-badge__ring--step-three">
                    <span>3</span>
                  </div>
                </div>
                <div className="signup-step-copy">
                  <span className="signup-step-copy__label">Step 3</span>
                  <strong>Security and Access</strong>
                </div>
              </div>

              <div className="signup-step-two">
                <label className="signup-field">
                  <span className="sr-only">Email Address</span>
                  <input type="email" placeholder="Email Address*" />
                </label>

                <label className="signup-field">
                  <span className="sr-only">Mobile Number</span>
                  <input type="tel" placeholder="Mobile Number*" />
                </label>

                <label className="signup-field">
                  <span className="sr-only">Create Password</span>
                  <input type="password" placeholder="Create Password*" />
                </label>

                <label className="signup-field">
                  <span className="sr-only">Confirm Password</span>
                  <input type="password" placeholder="Confirm Password*" />
                </label>

                <div className="signup-step-two__section">
                  <h3>Security Options</h3>
                </div>

                <div className="signup-option-list">
                  <label className="signup-option">
                    <input type="checkbox" defaultChecked />
                    <span>Enable two-factor authentication</span>
                  </label>
                  <label className="signup-option">
                    <input type="checkbox" />
                    <span>Receive sign-in alerts by email</span>
                  </label>
                </div>
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
          )}

          <p className="signup-panel__footer">
            Already have a account. <Link to="/login">Log in</Link>
          </p>
        </section>
      </section>
    </main>
  )
}
