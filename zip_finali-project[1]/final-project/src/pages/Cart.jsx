import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <button onClick={() => navigate("/home")} className="shop-now-btn">Start Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">₹{item.price}</p>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3 className="total-price">Total: ₹{totalPrice}</h3>
            <div className="cart-actions">
              <button onClick={() => navigate("/home")} className="continue-shopping-btn">
                Continue Shopping
              </button>
              <button onClick={clearCart} className="clear-cart-btn">
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
