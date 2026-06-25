import AppButton from './AppButton'

export default function AccountCreationModal({
  status,
  message,
  onClose,
}) {
  if (!status) {
    return null
  }

  const isSuccess = status === 'success'

  return (
    <div className="signup-modal-backdrop" role="presentation">
      <section
        className={`signup-modal signup-modal--${status}`}
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
              {isSuccess ? (
                <span className="signup-modal__status-mark signup-modal__status-mark--success" />
              ) : (
                <span className="signup-modal__status-mark signup-modal__status-mark--failed" />
              )}
            </div>
          </div>

          <div className="signup-modal__body">
            <h3 id="signup-modal-title">
              {isSuccess ? 'Account created successfully' : 'Sorry!'}
            </h3>
            <p>{message}</p>
            <AppButton
              type="button"
              className="signup-modal__button"
              onClick={onClose}
            >
              Okay
            </AppButton>
          </div>
        </div>
      </section>
    </div>
  )
}
