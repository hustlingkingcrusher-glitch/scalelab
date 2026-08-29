import HeroScene from './HeroScene'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__eyebrow">
          SCALELAB / DIGITAL STUDIO
        </div>

        <h1 className="hero__title">
          We build
          <br />
          what moves
          <br />
          business forward.
        </h1>

        <p className="hero__description">
          Digital products, intelligent systems, and
          creative experiences designed for ambitious
          businesses.
        </p>

        <a
          className="hero__action"
          href="#services"
        >
          Explore what we do
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero__visual">
        <div className="hero__visual-inner">
          <HeroScene />
        </div>
      </div>

      <div className="hero__meta">
        <span>01 / 05</span>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero