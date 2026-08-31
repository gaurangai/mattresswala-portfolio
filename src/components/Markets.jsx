import useReveal from '../hooks/useReveal'
import { markets } from '../data/companyData'
import './Markets.css'

export default function Markets() {
  const ref = useReveal()
  return (
    <section className="section markets">
      <div className="container">
        <div className="markets__row reveal-stagger" ref={ref}>
          <div className="markets__intro">
            <span className="eyebrow">Who We Serve</span>
            <h2>Retail. Wholesale. Industrial.</h2>
          </div>
          {markets.map((m) => (
            <div key={m.title} className="markets__card">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
