import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Grilled Chicken", price: 560, image: "/Delicious Pizza (1).jpeg" },
  { id: 2, name: "Beef Steak", price: 350, image: "/Burger .jpeg" },
  { id: 3, name: "Veggie Pasta", price: 570, image: "/Cajun Seafood Boil with Garlic Butter Sauce.jpeg" },
  { id: 4, name: "Seafood Platter", price: 800, image: "/Fast Food Clipart Transparent PNG Hd, Fast Food Cooking, Cooking, Safe, Food Charge PNG Image For Free Download.jpeg" },
 { id: 5, name: "Grilled Chicken", price: 950, image: "/Delicious Pizza (1).jpeg"},
 { id: 6, name: "Grilled Chicken", price: 1500, image: "/Delicious Pizza (1).jpeg"}
  
];

const Kfcmenu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl text-orange-500 font-bold text-center mb-6">Hotel Menu 🍽️</h1>

      {/* Food Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-lg font-bold text-orange-600">Ksh {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kfcmenu;
