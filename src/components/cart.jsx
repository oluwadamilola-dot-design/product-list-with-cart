export default function Cart({ cart, updateQuantity, removeFromCart, onConfirm }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h3>Your Cart ({totalItems})</h3>
      
      {cart.length === 0 ? (
        <div className="empty-cart-content">
          <img 
            src="/images/illustration-empty-cart.svg" 
            alt="Empty cart" 
            className="empty-cart-img" 
          />
          <p className="empty-cart-text">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.name} className="cart-item">
                {/* Left Side: Product Name, Quantity, and Unit Price */}
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <div className="cart-item-pricing">
                    <span className="item-qty">{item.quantity}x</span>
                    <span className="item-price">@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>

                {/* Right Side: Subtotal and Remove Button */}
                <div className="cart-item-action">
                  <span className="item-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button 
                    className="remove-item-btn" 
                    onClick={() => removeFromCart(item.name)} 
                    aria-label="Remove item"
                  >
                    <img src="/images/icon-remove-item.svg" alt="Remove" width="10" height="10" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total-row">
            <span>Order Total</span>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>

          <div className="carbon-neutral-box">
            <img src="/images/icon-carbon-neutral.svg" alt="Carbon neutral delivery" width="21" height="20" />
            <p>This is a <strong>carbon-neutral</strong> delivery</p>
          </div>

          <button className="confirm-btn" onClick={onConfirm}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}