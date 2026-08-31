import useReveal from '../hooks/useReveal'
import { journey } from '../data/journey'
import './Journey.css'

function JourneyItem({ item, index }) {
  const ref = useReveal()
  return (
    <li className={`journey__item reveal ${index % 2 === 0 ? 'journey__item--left' : 'journey__item--right'}`} ref={ref}>
      <div className="journey__dot" />
      <div className="journey__card">
        <span className="journey__year">{item.year}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </li>
  )
}

export default function Journey() {
  const headRef = useReveal()
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-head reveal" ref={headRef} style={{ margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Our Journey</span>
          <h2>Four Decades, One Thread</h2>
          <p style={{ margin: '1.25rem auto 0' }}>
            A legacy built one stitch at a time — from 1980 to the manufacturer MattressWala is today.
          </p>
        </div>

        <ol className="journey__list">
          {journey.map((item, i) => (
            <JourneyItem key={item.year} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
