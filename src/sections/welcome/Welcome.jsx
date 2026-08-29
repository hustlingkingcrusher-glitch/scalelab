import './Welcome.css'

function Welcome({ name, onContinue }) {
  return (
    <section className="welcome">
      <div className="welcome__visual">
        <div className="welcome__orb">
          <div className="welcome__orb-core" />
          <div className="welcome__orb-ring welcome__orb-ring--one" />
          <div className="welcome__orb-ring welcome__orb-ring--two" />
        </div>

        <div className="welcome__grid" />

        <div className="welcome__shape welcome__shape--one" />
        <div className="welcome__shape welcome__shape--two" />
        <div className="welcome__shape welcome__shape--three" />

        <div className="welcome__glow welcome__glow--one" />
        <div className="welcome__glow welcome__glow--two" />
      </div>

      <div className="welcome__content">
        <div className="welcome__top">
          <span className="welcome__brand">
            ScaleLab
          </span>

          <span className="welcome__status">
            <span className="welcome__status-dot" />
            Digital studio
          </span>
        </div>

        <div className="welcome__main">
          <span className="welcome__eyebrow">
            SCALELAB / WELCOME
          </span>

          <h1 className="welcome__title">
            Nice to
            <br />
            meet you,
            <br />
            <span>{name}.</span>
          </h1>

          <p className="welcome__description">
            Now let&apos;s build something that
            <br />
            moves your business forward.
          </p>

          <button
            className="welcome__continue"
            type="button"
            onClick={onContinue}
          >
            <span>Enter ScaleLab</span>

            <span
              className="welcome__continue-icon"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        </div>

        <div className="welcome__bottom">
          <span>01 / 05</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Welcome