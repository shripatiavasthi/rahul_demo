import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppButton from '../components/AppButton'
import AuthHero from '../components/AuthHero'
import FormInput from '../components/FormInput'
import { loginUser } from '../lib/api'
import { storeAuthSession } from '../lib/auth'

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
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setSubmitError('')

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length !== 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await loginUser({
        accountId: values.accountId.trim(),
        userName: values.userName.trim(),
        password: values.password,
      })

      storeAuthSession({
        token: response.token,
        user: response.user,
        rememberMe: values.rememberMe,
      })

      navigate('/home')
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="login-shell">
      <section className="login-card" aria-label="Login screen">
        <AuthHero />

        <section className="login-form-panel">
          <div className="login-form-panel__header">
            <h2>Log In</h2>
            <p>Enter your login details below.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <FormInput
              id="accountId"
              name="accountId"
              label="Account ID"
              hideLabel
              placeholder="Account ID"
              value={values.accountId}
              onChange={handleChange}
              error={errors.accountId}
            />

            <FormInput
              id="userName"
              name="userName"
              label="User Name"
              hideLabel
              placeholder="User Name"
              value={values.userName}
              onChange={handleChange}
              error={errors.userName}
            />

            <FormInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              hideLabel
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              action={{
                label: showPassword ? 'Hide' : 'View',
                ariaLabel: showPassword ? 'Hide password' : 'View password',
                onClick: () => setShowPassword((currentState) => !currentState),
              }}
            />

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

            {submitError ? (
              <p className="app-field__error" role="alert">
                {submitError}
              </p>
            ) : null}

            <AppButton className="login-form__submit" type="submit">
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </AppButton>
          </form>

          <p className="login-form-panel__footer">
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </section>
      </section>
    </main>
  )
}
