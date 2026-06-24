import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero.png'

const initialValues = {
  accountId: '',
  userName: '',
  password: '',
  rememberMe: false,
}

function validate(values) {
  const errors = {}

  if (!values.accountId.trim()) {
    errors.accountId = 'Account ID is required.'
  }

  if (!values.userName.trim()) {
    errors.userName = 'User Name is required.'
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required.'
  }

  return errors
}

export default function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      navigate('/home')
    }
  }

  return (
    <main className="login-shell">
      <section className="login-card" aria-label="Login screen">
        <aside className="login-hero">
          <img
            className="login-hero__background"
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
          <div className="login-hero__content">
            <div className="login-hero__brand" aria-label="Logo">
              <span className="login-hero__brand-mark" aria-hidden="true">
                <span className="login-hero__brand-stroke login-hero__brand-stroke--left" />
                <span className="login-hero__brand-stroke login-hero__brand-stroke--right" />
                <span className="login-hero__brand-stroke login-hero__brand-stroke--base" />
              </span>
              <span className="login-hero__brand-text">Logo</span>
            </div>
            <h1>Welcome to Legal Tasks Management and Monitoring Software</h1>
            <p className="login-hero__copy">
              Your centralized hub for managing legal tasks, tracking case
              progress, and optimizing workflows.
            </p>
          </div>
        </aside>

        <section className="login-form-panel">
          <div className="login-form-panel__header">
            <h2>Log In</h2>
            <p>Enter your login details below.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <div
                className={`input-shell ${errors.accountId ? 'input-shell--error' : ''}`}
              >
                <input
                  id="accountId"
                  name="accountId"
                  type="text"
                  placeholder="Account ID"
                  aria-label="Account ID"
                  value={values.accountId}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.accountId)}
                  aria-describedby={errors.accountId ? 'accountId-error' : undefined}
                />
              </div>
              {errors.accountId ? (
                <p className="form-field__error" id="accountId-error">
                  {errors.accountId}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <div
                className={`input-shell ${errors.userName ? 'input-shell--error' : ''}`}
              >
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="User Name"
                  aria-label="User Name"
                  value={values.userName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.userName)}
                  aria-describedby={errors.userName ? 'userName-error' : undefined}
                />
              </div>
              {errors.userName ? (
                <p className="form-field__error" id="userName-error">
                  {errors.userName}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <div
                className={`input-shell ${errors.password ? 'input-shell--error' : ''}`}
              >
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  aria-label="Password"
                  value={values.password}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="input-shell__action"
                  onClick={() => setShowPassword((currentState) => !currentState)}
                  aria-label={showPassword ? 'Hide password' : 'View password'}
                >
                  {showPassword ? 'Hide' : 'View'}
                </button>
              </div>
              {errors.password ? (
                <p className="form-field__error" id="password-error">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <div className="login-form__meta">
              <label className="check-control" htmlFor="rememberMe">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>

              <a href="/" onClick={(event) => event.preventDefault()}>
                Forgot Password?
              </a>
            </div>

            <button className="login-form__submit" type="submit">
              Log In
            </button>
          </form>

          <p className="login-form-panel__footer">
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </section>
      </section>
    </main>
  )
}
