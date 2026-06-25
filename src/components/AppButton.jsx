export default function AppButton({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...rest
}) {
  const buttonClassName = ["app-button", `app-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={buttonClassName} {...rest}>
      {children}
    </button>
  );
}
