import useReveal from '../hooks/useReveal'
import { products } from '../data/products'
import './Products.css'

function ProductCard({ product, index }) {
  const ref = useReveal()

  // Amazon links for each product
  const amazonLinks = [
    'https://amzn.in/d/03UYhho8', // Product 1
    'https://amzn.in/d/01VVPYox', // Product 2
    'https://amzn.in/d/06iCkPgx', // Product 3
    'https://amzn.in/d/0hWvktxK', // Product 4
  ]

  return (
    <article
      className="product-card reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="product-card__media">
        <img
          src={product.image}
          alt={`MattressWala ${product.title.toLowerCase()} — ${product.text}`}
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <span className="product-card__index">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3>{product.title}</h3>

        <p>{product.text}</p>

        {/* BUY NOW BUTTON */}
        <a
          href={amazonLinks[index]}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-now-btn"
        >
          Buy Now
        </a>
      </div>
    </article>
  )
}

export default function Products() {
  const headRef = useReveal()

  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">What We Make</span>

          <h2>Products, Not Promises</h2>

          <p>
            Four categories, each built the same way — for comfort that holds
            up over years, not just seasons.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}