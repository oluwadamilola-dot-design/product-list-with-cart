import { useState, useEffect } from 'react';
import ProductList from './components/productList';
import Cart from './components/cart';
import OrderModal from './components/orderModal';
import data from './data/data.json';

export default function App() {
  // Initialize cart from localStorage or start empty
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('react_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync cart changes to localStorage
  useEffect(() => {
    localStorage.setItem('react_cart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart or increment quantity if it already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Adjust quantity (+ / -)
  const updateQuantity = (productName, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.name === productName) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove individual item
  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  // Clear entire cart & close modal
  const clearCart = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <div className="app-shell">
      <main className="main-layout">
        <ProductList products={data} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          onConfirm={() => setIsModalOpen(true)}
        />
      </main>

      {isModalOpen && <OrderModal cart={cart} onStartNewOrder={clearCart} />}
    </div>
  );
}