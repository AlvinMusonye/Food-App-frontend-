import React, { useState } from 'react';

const restaurantData = [
  { id: 1, name: "KFC", img: "public/restaurants/KFC.jpeg" },
  { id: 2, name: "Chicken Inn", img: "public/restaurants/Chicken Inn Menu, Pricing, Locations & Review.jpeg" },
  { id: 3, name: "Pizza Inn", img: "public/restaurants/Pizza Inn Menu, 19 Pizza Types, and Prices (2024).jpeg" },
  { id: 4, name: "Macdonalds", img: "public/restaurants/CJ's (@cjs254) • Instagram photos and videos.jpeg" },
  { id: 5, name: "CJ's", img: "public/restaurants/CJ's (@cjs254) • Instagram photos and videos.jpeg" },
  { id: 6, name: "CJ's", img: "public/restaurants/CJ's (@cjs254) • Instagram photos and videos.jpeg" },
  { id: 7, name: "CJ's", img: "public/restaurants/CJ's (@cjs254) • Instagram photos and videos.jpeg" },
  { id: 8, name: "CJ's", img: "public/restaurants/CJ's (@cjs254) • Instagram photos and videos.jpeg" },
];

function Restaurant() {
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="text-center font-bold text-2xl text-orange-500 m-4">
        <h1 className="underline">Order from Any Restaurant near you</h1>
        <input
          type="text"
          placeholder="Search Restaurant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 px-4 py-2 w-full md:w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="shadow-md flex flex-col items-center p-4 rounded-lg bg-white">
              <img src={restaurant.img} className="w-48 h-48 object-cover rounded-md" alt={restaurant.name} />
              <h2 className="mt-2 text-lg font-semibold">{restaurant.name}</h2>

              <button className="mt-4 px-6 cursor-pointer py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                Order Here
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Restaurant;
