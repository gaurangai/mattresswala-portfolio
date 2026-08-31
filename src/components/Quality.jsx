import bedsheetFloral from '../assets/images/bedsheet-floral.jpeg'
import useReveal from '../hooks/useReveal'
import './Quality.css'

const pillars = ['Quality Manufacturing', 'Comfort', 'Durability', 'Craftsmanship', 'Innovation', 'Customer Satisfaction']

export default function Quality() {
  const ref = useReveal()
  const listRef = useReveal()

  return (
    <section id="quality" className="section quality">
      <div className="container quality__grid">
        <div className="quality__image reveal" ref={ref}>
          <img src={bedsheetFloral} alt="MattressWala floral bedsheet set, an example of the brand's finished quality" loading="lazy" />
        </div>

        <div className="quality__copy">
          <span className="eyebrow">Our Standard</span>
          <h2>Quality That Lasts</h2>
          <p className="quality__lead">
            Every piece MattressWala makes is judged the same way: does it feel
            good tonight, and will it still feel good in five years.
          </p>
          <ul className="quality__pillars reveal-stagger" ref={listRef}>
            {pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
