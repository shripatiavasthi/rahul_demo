import AppButton from "./AppButton";

export default function FormInput({
  id,
  name,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error,
  className = "",
  inputClassName = "",
  select = false,
  options = [],
  action,
  endAdornment,
  hideLabel = false,
  hideErrorMessage = false,
  ...rest
}) {
  const errorId = error ? `${id}-error` : undefined;
  const fieldClassName = [
    "app-field",
    select ? "app-field--select" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const controlClassName = [
    "app-input",
    action ? "app-input--inline" : "app-input--boxed",
    error ? "app-input--error" : "",
    inputClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={fieldClassName} htmlFor={id}>
      {label ? (
        <span className={hideLabel ? "sr-only" : "app-field__label"}>{label}</span>
      ) : null}

      <div className={controlClassName}>
        {select ? (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            {...rest}
          >
            {options.map((option) => (
              <option
                key={option.value ?? option.label}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            {...rest}
          />
        )}

        {action ? (
          <AppButton
            variant="inline"
            className="app-input__action"
            onClick={action.onClick}
            aria-label={action.ariaLabel}
          >
            {action.label}
          </AppButton>
        ) : null}

        {endAdornment ? endAdornment : null}
      </div>

      {error && !hideErrorMessage ? (
        <p className="app-field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </label>
  );
}
