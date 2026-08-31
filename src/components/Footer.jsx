import logo from '../assets/images/logo1.png'
import { company, navLinks } from '../data/companyData'
import { products } from '../data/products'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
      <div className="footer__brand">

  <div className="footer__logo-wrap">

    <img
      src={logo}
      alt={`${company.name} logo`}
      className="footer__logo"
    />

    <span className="logo-star star-one">✦</span>
    <span className="logo-star star-two">✦</span>
    <span className="logo-star star-three">✧</span>

  </div>

  <p>{company.description}</p>

</div>

        <nav aria-label="Footer navigation">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </nav>

        <nav aria-label="Footer products">
          <h4>Products</h4>
          <ul>
            {products.map((p) => <li key={p.id}><a href="#products">{p.title}</a></li>)}
          </ul>
        </nav>

        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={company.emailHref}>{company.email}</a></li>
            <li><a href={company.phoneHref}>{company.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
