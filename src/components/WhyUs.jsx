import useReveal from '../hooks/useReveal'
import { whyUs } from '../data/companyData'
import './WhyUs.css'

function WhyItem({ item }) {
  const ref = useReveal()
  return (
    <li className="why-item reveal" ref={ref}>
      <span className="why-item__n">{item.n}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </li>
  )
}

export default function WhyUs() {
  const headRef = useReveal()
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Why MattressWala</span>
          <h2>Six Reasons It Holds Up</h2>
        </div>
        <ul className="why__grid">
          {whyUs.map((item) => <WhyItem key={item.n} item={item} />)}
        </ul>
      </div>
    </section>
  )
}
