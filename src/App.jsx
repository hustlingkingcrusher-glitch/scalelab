import { useState } from 'react'
import Input from './components/ui/Input'
import Button from './components/ui/Button'
import Navbar from './components/navigation/Navbar'
import Hero from './sections/hero/Hero'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Software & Web',
    description:
      'Websites, applications, and digital products built to perform.',
  },
  {
    number: '02',
    title: 'AI & Automation',
    description:
      'Intelligent systems that remove repetitive work and create leverage.',
  },
  {
    number: '03',
    title: 'Creative Branding',
    description:
      'Distinct visual identities that make businesses recognizable.',
  },
  {
    number: '04',
    title: 'Data & Analytics',
    description:
      'Turn business data into clearer decisions and measurable growth.',
  },
  {
    number: '05',
    title: 'Finance & Forex',
    description:
      'Tools, education, and systems for navigating financial markets.',
  },
]

function App() {
  const [name, setName] = useState('')
  const [hasEntered, setHasEntered] = useState(false)

  const handleContinue = () => {
    const cleanName = name.trim()

    if (!cleanName) {
      return
    }

    setName(cleanName)
    setHasEntered(true)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleContinue()
    }
  }

  if (!hasEntered) {
    return (
      <div className="app">
        <main className="intro">
          <div className="intro__content">
            <div className="intro__brand">
              ScaleLab
            </div>

            <div className="intro__question">
              <span className="intro__eyebrow">
                01 / INTRODUCTION
              </span>

              <h1>
                What should
                <br />
                we call you?
              </h1>

              <div className="intro__form">
                <Input
                  id="name"
                  label="Your name"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your name"
                  autoComplete="name"
                  autoFocus
                />

                <Button
                  type="button"
                  variant="primary"
                  onClick={handleContinue}
                  disabled={!name.trim()}
                >
                  Continue
                  <span className="sl-button__icon">
                    →
                  </span>
                </Button>
              </div>
            </div>

            <div className="intro__footer">
              <span>ScaleLab</span>

              <span>
                Digital systems for ambitious businesses.
              </span>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />

      <main className="home">

        {/* ================================
            PERSONAL GREETING
            ================================ */}

        <section className="welcome">
          <div className="welcome__inner">
            <span className="welcome__eyebrow">
              SCALELAB / WELCOME
            </span>

            <h2 className="welcome__title">
              Nice to meet you,
              <br />
              <span>{name}.</span>
            </h2>

            <p className="welcome__description">
              Now let&apos;s build something that moves
              your business forward.
            </p>
          </div>
        </section>

        {/* ================================
            HERO
            ================================ */}

        <Hero />

        {/* ================================
            SERVICES
            ================================ */}

        <section
          className="services"
          id="services"
        >
          <div className="services__header">
            <div>
              <span className="services__label">
                02 — SERVICES
              </span>

              <h2>
                What can we
                <br />
                do for you?
              </h2>
            </div>

            <p>
              Choose where you want to start. We combine
              technology, creativity, and strategy to build
              systems that actually move businesses forward.
            </p>
          </div>

          <div className="services__grid">
            {services.map((service) => (
              <button
                className="service-card"
                key={service.number}
                type="button"
              >
                <span className="service-card__number">
                  {service.number}
                </span>

                <div className="service-card__content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <span
                  className="service-card__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ================================
            ABOUT
            ================================ */}

        <section
          className="home__about"
          id="about"
        >
          <div className="home__about-label">
            03 — ABOUT
          </div>

          <div className="home__about-content">
            <p>
              ScaleLab designs and builds digital systems
              for businesses that are ready to operate at
              another level.
            </p>

            <span>
              Strategy. Technology. Design.
            </span>
          </div>
        </section>

        {/* ================================
            CONTACT
            ================================ */}

        <section
          className="contact"
          id="contact"
        >
          <div className="contact__label">
            04 — CONTACT
          </div>

          <div className="contact__content">
            <span className="contact__eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let&apos;s build
              <br />
              something real.
            </h2>

            <a
              className="contact__action"
              href="mailto:hello@scalelab.com"
            >
              Start a conversation
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* ================================
            FOOTER
            ================================ */}

        <footer className="footer">
          <span>
            © 2026 ScaleLab
          </span>

          <span>
            Built for what&apos;s next.
          </span>
        </footer>

      </main>
    </div>
  )
}

export default App