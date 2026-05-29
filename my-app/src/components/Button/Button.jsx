import { HiArrowRight } from 'react-icons/hi'
import './Button.css'

function Button({
  children,
  variant = 'primary',
  showArrow = false,
  type = 'button',
  className = '',
  href,
  onClick,
}) {
  const classNames = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')
  const content = (
    <>
      <span className="btn__ambient-glow" aria-hidden="true" />
      <span>{children}</span>
      {showArrow && <HiArrowRight className="btn__arrow" aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
