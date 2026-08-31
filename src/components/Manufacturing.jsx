import bedsheetRust from '../assets/images/bedsheet-rust.jpeg'
import LoomIllustration from './LoomIllustration'
import useReveal from '../hooks/useReveal'
import './Manufacturing.css'

export default function Manufacturing() {
  const copyRef = useReveal()
  const illRef = useReveal()

  return (
    <section id="manufacturing" className="section manufacturing">
      <div className="container manufacturing__grid">
        <div className="manufacturing__copy reveal" ref={copyRef}>
          <span className="eyebrow" style={{ color: 'var(--linen)' }}>Manufacturing</span>
          <h2 className="manufacturing__title">Craftsmanship<br />Meets Technology</h2>
          <p>
            MattressWala combines traditional craftsmanship with modern high-tech
            machinery and advanced production technologies — turning raw thread
            into bedsheets, pillows, comforters, and mattresses that hold up to
            decades of everyday use.
          </p>
          <div className="manufacturing__band">
            <div>
              <strong>1980</strong>
              <span>Where it started</span>
            </div>
            <div>
              <strong>Modern</strong>
              <span>Machinery &amp; process</span>
            </div>
            <div>
              <strong>Hand + Machine</strong>
              <span>Craft, at scale</span>
            </div>
          </div>
        </div>

        <div className="manufacturing__visual reveal" ref={illRef}>
          <LoomIllustration />
          <img src={bedsheetRust} alt="A finished MattressWala bedsheet — the end product of the manufacturing process" className="manufacturing__swatch" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
