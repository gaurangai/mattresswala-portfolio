import homeImage from '../assets/images/home image.png'
import FoldDivider from './FoldDivider'
import { company } from '../data/companyData'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* =========================================
          RIGHT SIDE LIFESTYLE IMAGE
         ========================================= */}

      <div className="hero__background-image">
        <img
          src={homeImage}
          alt="MattressWala premium home furnishing"
        />
      </div>


      {/* =========================================
          SOFT IMAGE BLEND
         ========================================= */}

      <div className="hero__image-overlay"></div>


      {/* =========================================
          MAIN CONTENT
         ========================================= */}

      <div className="container hero__row">

        {/* LEFT CONTENT */}

        <div className="hero__copy">

          <span className="eyebrow">
            Est. 1980 · Home Furnishing
          </span>


          <h1 className="hero__headline">
            Crafting <em>Comfort.</em><br />
            Building Trust<br />
            Since 1980.
          </h1>


          <p className="hero__sub">
            {company.subhead}
          </p>


          <div className="hero__actions">

            <a
              href="#products"
              className="btn btn--primary"
            >
              Explore Our Products
            </a>

            <a
              href="#about"
              className="btn btn--ghost"
            >
              Discover Our Story
            </a>

          </div>


          <p className="hero__tagline">
            "{company.tagline}"
          </p>


          {/* =====================================
              TRUST FEATURES
             ===================================== */}

          <div className="hero__features">

            <div className="hero__feature">

              <div className="hero__feature-icon">
                ✓
              </div>

              <div>
                <strong>40+ Years</strong>
                <span>of Experience</span>
                <small>Since 1980</small>
              </div>

            </div>


            <div className="hero__feature">

              <div className="hero__feature-icon">
                ✦
              </div>

              <div>
                <strong>Premium</strong>
                <span>Materials</span>
                <small>Selected for lasting comfort</small>
              </div>

            </div>


            <div className="hero__feature">

              <div className="hero__feature-icon">
                ⚙
              </div>

              <div>
                <strong>Modern</strong>
                <span>Manufacturing</span>
                <small>Technology meets craftsmanship</small>
              </div>

            </div>


            <div className="hero__feature">

              <div className="hero__feature-icon">
                ♢
              </div>

              <div>
                <strong>Trusted</strong>
                <span>Quality</span>
                <small>Made with care & consistency</small>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM SERVICE BAR
         ========================================= */}

      <div className="container hero__service-wrap">

        <div className="hero__service-bar">

          <div className="hero__service">

            <div className="hero__service-icon">
              🚚
            </div>

            <div>
              <strong>Pan India Delivery</strong>
              <span>Safe & On-time Delivery</span>
            </div>

          </div>


          <div className="hero__service">

            <div className="hero__service-icon">
              ▣
            </div>

            <div>
              <strong>Secure Payments</strong>
              <span>100% Safe & Secure</span>
            </div>

          </div>


          <div className="hero__service">

            <div className="hero__service-icon">
              ↻
            </div>

            <div>
              <strong>Easy Returns</strong>
              <span>Hassle-free Returns</span>
            </div>

          </div>


          <div className="hero__service">

            <div className="hero__service-icon">
              ♧
            </div>

            <div>
              <strong>Dedicated Support</strong>
              <span>We're Here to Help</span>
            </div>

          </div>

        </div>

      </div>


      <FoldDivider
        from="var(--linen)"
        to="var(--linen-dim)"
        id="hero"
      />

    </section>
  )
}