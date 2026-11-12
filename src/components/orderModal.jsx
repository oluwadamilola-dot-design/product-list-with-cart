export default function OrderModal({ cart, onStartNewOrder }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Solid Green Success Checkmark Icon */}
       <div className="order-confirmed-icon">
  <img 
    src="/images/icon-order-confirmed.svg" 
    alt="Order confirmed" 
    width="48" 
    height="48" 
  />
</div>

        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        
        <div className="modal-order-summary">
          {cart.map((item) => (
            <div key={item.name} className="modal-item">
              <div className="modal-item-left">
                {/* Product Thumbnail */}
                <img 
                  src={item.image?.thumbnail || item.image} 
                  alt={item.name} 
                  className="modal-thumb" 
                />
                <div className="modal-item-info">
                  <span className="item-name">{item.name}</span>
                  {/* Quantity (Red) and Unit Price underneath */}
                  <div className="modal-item-pricing">
                    <span className="item-qty">{item.quantity}x</span>
                    <span className="item-unit-price">@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <strong className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}

          <div className="modal-total">
            <span>Order Total</span>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
        </div>

        <button className="confirm-btn" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}