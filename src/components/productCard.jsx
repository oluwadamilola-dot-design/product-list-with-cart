export default function ProductCard({ product, cartItem, addToCart, updateQuantity }) {
  return (
    <div className="product-card">
      <div className={`image-container ${cartItem ? 'active-border' : ''}`}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt={product.name} className="product-img" />
        </picture>

        {!cartItem ? (
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <img 
              src="/images/icon-add-to-cart.svg" 
              alt="Add to cart icon" 
              width="21" 
              height="20" 
            />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-selector">
            <button 
              className="qty-btn" 
              onClick={() => updateQuantity(product.name, -1)} 
              aria-label="Decrease quantity"
            >
              <img src="/images/icon-decrement-quantity.svg" alt="Decrease" width="10" height="10" />
            </button>
            
            <span>{cartItem.quantity}</span>
            
            <button 
              className="qty-btn" 
              onClick={() => updateQuantity(product.name, 1)} 
              aria-label="Increase quantity"
            >
              <img src="/images/icon-increment-quantity.svg" alt="Increase" width="10" height="10" />
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}