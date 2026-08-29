import './Button.css'

function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`sl-button sl-button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button