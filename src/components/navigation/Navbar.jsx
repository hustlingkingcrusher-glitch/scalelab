import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <a
        className="navbar__logo"
        href="/"
        aria-label="ScaleLab home"
        onClick={closeMenu}
      >
        <span className="navbar__logo-mark" aria-hidden="true">
          <span />
        </span>

        <span className="navbar__logo-text">
          ScaleLab
        </span>
      </a>

      <nav
        className="navbar__nav"
        aria-label="Main navigation"
      >
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar__actions">
        <a
          className="navbar__project"
          href="#contact"
        >
          <span>Let&apos;s talk</span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
          />
        </a>

        <button
          className="navbar__menu"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={19} strokeWidth={1.7} />
          ) : (
            <Menu size={19} strokeWidth={1.7} />
          )}
        </button>
      </div>

      <div
        className={`navbar__mobile-panel ${
          menuOpen ? 'navbar__mobile-panel--open' : ''
        }`}
      >
        <nav
          className="navbar__mobile-nav"
          aria-label="Mobile navigation"
        >
          <a href="#about" onClick={closeMenu}>
            <span className="navbar__mobile-number">
              01
            </span>

            <span className="navbar__mobile-label">
              About
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.7}
            />
          </a>

          <a href="#services" onClick={closeMenu}>
            <span className="navbar__mobile-number">
              02
            </span>

            <span className="navbar__mobile-label">
              Services
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.7}
            />
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span className="navbar__mobile-number">
              03
            </span>

            <span className="navbar__mobile-label">
              Contact
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.7}
            />
          </a>
        </nav>

        <a
          className="navbar__mobile-cta"
          href="#contact"
          onClick={closeMenu}
        >
          <span>Let&apos;s talk</span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.7}
          />
        </a>
      </div>
    </header>
  )
}

export default Navbar