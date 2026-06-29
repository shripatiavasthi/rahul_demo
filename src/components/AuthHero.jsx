import heroImage from "../assets/image 10.png";
import logoImage from "../assets/Group 3.png"

export default function AuthHero({
  title = "Welcome to Legal Tasks Management and Monitoring Software",
  copy = "Your centralized hub for managing legal tasks, tracking case progress, and optimizing workflows.",
  className = "",
}) {
  const heroClassName = ["auth-hero", className].filter(Boolean).join(" ");

  return (
    <aside className={heroClassName}>
      <img
        className="auth-hero__background"
        src={heroImage}
        alt=""
        aria-hidden="true"
      />

      <div className="auth-hero__content">
        <div className="auth-hero__brand" aria-label="Logo">
          <img className='login-logo-img' src={logoImage} alt='logo-img' />
          <span className="auth-hero__brand-text">Logo</span>
        </div>

        <h1>{title}</h1>
        <p className="auth-hero__copy">{copy}</p>
      </div>
    </aside>
  );
}
