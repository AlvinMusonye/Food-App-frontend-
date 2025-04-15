import React from 'react';
import { Link } from 'react-router-dom';

function FastFood() {
    return (
        <div className="p-6  dark:bg-dark-contrast">
            <h1 className="text-center text-3xl font-bold text-orange-500 mb-6 underline">
                Order Your Favorite Fast Food 🍔🍕🍗
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 dark:bg-dark-contrast dark:text-orange-500">
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center dark:bg-dark-contrast ">
                    <img src="/public/assets/Burger .jpeg" alt="public/Burger 🍔.jpeg" className="w-48 h-48 object-cover rounded-md" />
                    <h1 className="mt-2 text-lg font-semibold">Burger King</h1>
                    <Link to="kfcmenu" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center dark:bg-dark-contrast">
                    <img src="/public/assets/KFC (1).jpeg" alt="KFC" className="w-48 h-48 object-cover rounded-md" />
                    <h1 className="mt-2 text-lg font-semibold">KFC</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center dark:bg-dark-contrast">
                    <img src="/public/assets/Delicious Pizza (1).jpeg" alt="Pizza" className="w-48 h-48 object-cover rounded-md" />
                    <h1 className="mt-2 text-lg font-semibold">Pizza Inn</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full px-6 cursor-pointer py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center dark:bg-dark-contrast ">
                    <img src="/public/Assets/Delicious Pizza (1).jpeg" alt="public/Burger 🍔.jpeg" className="w-48 h-48 object-cover rounded-md" />
                    <h1 className="mt-2 text-lg font-semibold">Burger King</h1>
                    <Link to="kfcmenu" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center dark:bg-dark-contrast">
                    <img src="/public/assets/Burger .jpeg" alt="KFC" className="w-48 h-48 object-cover rounded-md" />
                    <h1 className="mt-2 text-lg font-semibold">KFC</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center dark:bg-dark-contrast">
                    <img src="/public/assets/KFC (1).jpeg" alt="Pizza" className="w-48 h-48 object-cover rounded-md" />
                    <h1 className="mt-2 text-lg font-semibold">Pizza Inn</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full px-6 cursor-pointer py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FastFood;
