import { useEffect, useState } from 'react'
import logo from '../assets/images/LOGO2.png'
import { navLinks, company } from '../data/companyData'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  /* =========================================================
     NAVBAR SCROLL + ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 24)

      /*
        Check which section is currently visible
      */
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      let currentSection = 'home'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* =========================================================
     MOBILE MENU BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* =========================================================
     LINK CLICK
  ========================================================= */

  const handleLinkClick = (href) => {
    setOpen(false)

    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__row">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="#home"
          className="navbar__brand"
          onClick={() => handleLinkClick('#home')}
        >
          <img
            src={logo}
            alt={`${company.name} logo`}
            className="navbar__logo"
          />
        </a>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="navbar__links" aria-label="Primary">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                activeSection === link.href.replace('#', '')
                  ? 'active'
                  : ''
              }
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}

        </nav>


        {/* =====================================================
            CALL US
        ===================================================== */}

        <a
          href="#contact"
          className="btn btn--primary navbar__cta"
          onClick={() => handleLinkClick('#contact')}
        >
          Call Us
        </a>


        {/* =====================================================
            MOBILE BURGER
        ===================================================== */}

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={
              activeSection === link.href.replace('#', '')
                ? 'active'
                : ''
            }
            onClick={() => handleLinkClick(link.href)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="btn btn--primary"
          onClick={() => handleLinkClick('#contact')}
        >
          Call Us
        </a>

      </nav>

    </header>
  )
}