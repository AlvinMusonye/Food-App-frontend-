import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Grilled Chicken", price: 560, image: "/public/assets/Beautiful Burger _ yum yum.jpeg" },
  { id: 2, name: "Beef Steak", price: 350, image: "/public/assets/Burger .jpeg" },
  { id: 3, name: "Veggie Burger", price: 570, image: "/public/assets/Burger King Is Selling A Crispy Taco For Just $1.jpeg" },
  { id: 4, name: "Seafood Platter", price: 800, image: "/public/assets/crack burgers -.jpeg" },
 { id: 5, name: "Classic cheese Burger", price: 950, image: "/public/assets/Classic Cheeseburger [25 Minutes].jpeg"},
 { id: 6, name: "Cripsy Chicken Burger", price: 850, image: "/public/assets/🔥 Satisfy Your Cravings with Burger King Melts! 🍔🧀.jpeg"}
  
];

const Kfcmenu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div className=" mx-auto p-6 dark:bg-dark-contrast">
      <h1 className="text-3xl text-orange-500 font-bold text-center mb-6 ">Burger Menu 🍽️</h1>

      {/* Food Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-lg text-center cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold dark:text-gray-100">{item.name}</h2>
            <p className="text-lg font-bold text-orange-600">Ksh {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kfcmenu;
