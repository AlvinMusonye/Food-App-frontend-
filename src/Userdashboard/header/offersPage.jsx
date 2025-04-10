import React from "react";
import { useNavigate } from "react-router-dom";

const offers = [
  {
    id: 1,
    title: "50% Off All Pizzas",
    description: "Enjoy half off on all your favorite pizzas this weekend only!",
    image: "https://images.unsplash.com/photo-1601925261734-04b3d1f2b683?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Buy 1 Burger, Get 1 Free",
    description: "Double the delight with our buy-one-get-one burger offer!",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Free Dessert on Orders Above $30",
    description: "Satisfy your sweet tooth with a free dessert on big orders!",
    image: "https://images.unsplash.com/photo-1613145994327-27948f0a2fc4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "20% Off All Beverages",
    description: "Cool down with a refreshing drink—now at a discounted price!",
    image: "https://images.unsplash.com/photo-1571076774036-426b9033eccc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Family Combo Meal Deal",
    description: "Get a complete meal for four at a special price. Great for families!",
    image: "https://images.unsplash.com/photo-1606755962773-653c82b4b4f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Burger fries plus coke @700ksh ",
    description: "Get a complete meal for four at a special price. Great for families! and kids",
    image: "public/ba3b43ba-81c7-4546-8373-0a6ebbbf66d7.jpeg",
  },
];

const OffersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Special Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{offer.title}</h2>
            <button
              onClick={() => navigate("/cart")}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Go to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
