import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl h-screen mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty! <Link to="/user-dashboard" className="text-orange-500">Go to Menu</Link>
        </p>
      ) : (
        <div className="border p-4 rounded-lg shadow-lg">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <p>
                {item.name} - <span className="font-bold">Ksh {item.price.toFixed(2)}</span> x {item.quantity}
              </p>
              <div className="flex items-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mx-2"
                >
                  ➖
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-2 py-1 rounded mx-2"
                >
                  ➕
                </button>
              </div>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-4">
            Total: <span className="text-orange-600">Ksh {totalPrice.toFixed(2)}</span>
          </h3>

          <div className="mt-4 flex justify-between">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <Link
              to={`/mpesa?total=${totalPrice}`}
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              Proceed to Payment
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
