import useReveal from '../hooks/useReveal'
import { company } from '../data/companyData'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner reveal" ref={ref}>

        <span
          className="eyebrow"
          style={{
            color: 'var(--linen)',
            justifyContent: 'center'
          }}
        >
          Get In Touch
        </span>

        <h2 className="contact__title">
          Let's Build Better<br />
          Comfort Together.
        </h2>

        <div className="contact__details">

          {/* Email */}
          <a
            href={company.emailHref}
            className="contact__detail"
          >
            <span>Email</span>
            {company.email}
          </a>

          {/* Phone */}
          <a
            href={company.phoneHref}
            className="contact__detail"
          >
            <span>Phone</span>
            {company.phone}
          </a>

        {/* Location */}
<a
  href="https://maps.app.goo.gl/4JXt34h1hn6BhX8s5"
  target="_blank"
  rel="noopener noreferrer"
  className="contact__detail"
>
  <span>Location</span>
  Shyam Fibers, 798, Opp. Radhaswami Satsang Beas,
  Near Utsav Food Products, Pij Road, Tundel,
  Nadiad - 387230
</a>
        </div>

        <div className="contact__actions">

          {/* Email Button */}
          <a
            href="mailto:sales@shyamfibre.com"
            className="btn btn--light"
          >
            Email Us
          </a>

          {/* Call Button */}
          <a
            href="tel:+919428900443"
            className="btn btn--light"
          >
            Call Us
          </a>

        </div>

      </div>
    </section>
  )
}