import ProductCard from './productCard';

export default function ProductList({ products, cart, addToCart, updateQuantity }) {
  return (
    <section className="product-section">
      <h1>Desserts</h1>
      <div className="product-grid">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.name === product.name);
          return (
            <ProductCard 
              key={product.name} 
              product={product} 
              cartItem={cartItem} 
              addToCart={addToCart} 
              updateQuantity={updateQuantity} 
            />
          );
        })}
      </div>
    </section>
  );
}