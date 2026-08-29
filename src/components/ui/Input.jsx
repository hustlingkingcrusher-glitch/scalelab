import './Input.css'

function Input({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onKeyDown,
  placeholder = '',
  autoComplete,
  autoFocus = false,
  disabled = false,
  error = '',
}) {
  return (
    <div
      className={`sl-input ${
        error ? 'sl-input--error' : ''
      }`}
    >
      {label && (
        <label
          className="sl-input__label"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className="sl-input__field"
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : undefined
        }
      />

      {error && (
        <p
          className="sl-input__error"
          id={`${id}-error`}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default Input