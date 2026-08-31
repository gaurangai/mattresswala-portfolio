import cushionsPair from '../assets/images/cushions-pair.jpeg'
import useReveal from '../hooks/useReveal'
import { company } from '../data/companyData'
import './About.css'

export default function About() {
  const revealRef = useReveal()
  const imgRef = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__image reveal" ref={imgRef}>
          <img src={cushionsPair} alt="MattressWala cushions styled on a linen throw, reflecting the brand's textile craft" />
          <div className="about__image-tag">
            <span>Since</span>
            <strong>1980</strong>
          </div>
        </div>

        <div className="about__copy reveal" ref={revealRef}>
          <span className="eyebrow">About MattressWala</span>
          <h2>A Legacy Built<br />on Quality</h2>
          <p className="about__lead">{company.description}</p>

          <ul className="about__points">
            <li><span>Founded</span>1980 — over four decades of industry experience</li>
            <li><span>Craft</span>Traditional craftsmanship paired with modern machinery</li>
            <li><span>Trust</span>Built on decades of quality manufacturing and customer trust</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
