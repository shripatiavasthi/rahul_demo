export default function AuthErrorAlert({ message, className = "" }) {
  if (!message) {
    return null;
  }

  const alertClassName = ["auth-error-alert", className].filter(Boolean).join(" ");

  return (
    <div className={alertClassName} role="alert">
      <span className="auth-error-alert__icon" aria-hidden="true">
        !
      </span>
      <span className="auth-error-alert__message">{message}</span>
    </div>
  );
}
