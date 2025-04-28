import React from 'react'
import { Link } from 'react-router-dom'

function Pastry() {
  return (
    <div className="p-6">
    <h1 className="text-center text-3xl font-bold text-orange-500 mb-6 underline">
        Order Your Favorite Pasries!!🎂🍪🍩
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src="/Martha's Country Bakery (@marthascountrybakery) •….jpeg" alt="Burger" className="w-48 h-48 object-cover rounded-md" />
            <h1 className="mt-2 text-lg font-semibold">Baker's Inn</h1>
            <Link to="pastrymenu" className="mt-4 w-full">
                <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                    Order Now
                </button>
            </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src="/Chocolate Glazed Donuts by Master Baker - My Urban Treats.jpeg" alt="KFC" className="w-48 h-48 object-cover rounded-md" />
            <h1 className="mt-2 text-lg font-semibold">Cake City</h1>
            <Link to="#" className="mt-4 w-full">
                <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                    Order Now
                </button>
            </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src="/Mixed Berry Tart Recipe _ Driscoll's.jpeg" alt="Pizza" className="w-48 h-48 object-cover rounded-md" />
            <h1 className="mt-2 text-lg font-semibold">Cj's Bakers</h1>
            <Link to="#" className="mt-4 w-full">
                <button className="w-full px-6 cursor-pointer py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                    Order Now
                </button>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Pastry