import heroImage from "../assets/hero.png";

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
          <span className="auth-hero__brand-mark" aria-hidden="true">
            <span className="auth-hero__brand-stroke auth-hero__brand-stroke--left" />
            <span className="auth-hero__brand-stroke auth-hero__brand-stroke--right" />
            <span className="auth-hero__brand-stroke auth-hero__brand-stroke--base" />
          </span>
          <span className="auth-hero__brand-text">Logo</span>
        </div>

        <h1>{title}</h1>
        <p className="auth-hero__copy">{copy}</p>
      </div>
    </aside>
  );
}
