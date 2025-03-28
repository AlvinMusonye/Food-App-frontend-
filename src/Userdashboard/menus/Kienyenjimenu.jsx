import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "mrendaah", price: 150, image: "/Njama Njama and FuFu.jpeg" },
  { id: 2, name: "Muboora (Pumpkin Leaves)", price: 250, image: "/Muboora Recipe (Pumpkin Leaves).jpeg" },
  { id: 3, name: "Kunde Veggie", price: 270, image: "/Kenyan Kunde _ Mboga Kienyeji (Cowpeas Leaves) Recipe.jpeg" },
  { id: 4, name: "Njama Njama", price: 300, image: "/Njama Njama and FuFu.jpeg" },
];

const Kienyenjimenu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Kienyenji Menu 🍽️</h1>

      {/* Food Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default Kienyenjimenu;
