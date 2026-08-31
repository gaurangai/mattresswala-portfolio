import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { gallery } from '../data/products'
import './Gallery.css'

function GalleryItem({ item, index, onOpen }) {
  const ref = useReveal()
  return (
    <button
      className={`gallery__item gallery__item--${index % 3} reveal`}
      ref={ref}
      onClick={() => onOpen(index)}
      aria-label={`Open larger view: ${item.alt}`}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
      <span className="gallery__overlay" aria-hidden="true">View</span>
    </button>
  )
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const headRef = useReveal()
  const closeBtnRef = useRef(null)

  const open = (i) => setActiveIndex(i)
  const close = () => setActiveIndex(null)
  const next = () => setActiveIndex((i) => (i + 1) % gallery.length)
  const prev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)

  useEffect(() => {
    if (activeIndex === null) return
    closeBtnRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Gallery</span>
          <h2>A Closer Look</h2>
        </div>

        <div className="gallery__grid">
          {gallery.map((item, i) => (
            <GalleryItem key={item.src} item={item} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lightbox__close" ref={closeBtnRef} onClick={close} aria-label="Close image viewer">×</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">‹</button>
          <figure className="lightbox__figure">
            <img src={gallery[activeIndex].src} alt={gallery[activeIndex].alt} />
            <figcaption>{gallery[activeIndex].alt}</figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">›</button>
          <div className="lightbox__backdrop" onClick={close} />
        </div>
      )}
    </section>
  )
}
