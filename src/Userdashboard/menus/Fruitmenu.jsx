import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Grilled Chicken", price: 500, image: "/FRUIT SALAD.jpeg" },
  { id: 2, name: "Beef Steak", price: 650, image: "/Fruit Tarts.jpeg" },
  { id: 3, name: "Veggie Pasta", price: 550, image: "/fruit1.jpeg" },
  { id: 4, name: "Seafood Platter", price: 390, image: "/c524801b-21c0-4793-9c0b-9274a22944f0.jpeg" },
];

const Fruitmenu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Hotel Menu 🍽️</h1>

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

export default Fruitmenu;
