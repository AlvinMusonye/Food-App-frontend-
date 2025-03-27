import React from 'react';
import { Link } from 'react-router-dom';

function Kienyenji() {
    return (
        <div className="p-6 h-screen" >
            <h1 className="text-center text-3xl font-bold text-orange-500 mb-6 underline">
                Order Your Kid's Favourite at a Go 🚀
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Item 1 */}
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img 
                        src="/Fruity PEBBLES French Toast.jpeg" 
                        alt="Njama Njama and FuFu" 
                        className="w-48 h-48 object-cover rounded-md" 
                    />
                    <h1 className="mt-2 text-lg font-semibold">Mama Nilishe</h1>
                    <Link to="Kidmenu" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                {/* Item 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img 
                        src="/Creamy Cauliflower Linguini - Feeding Tiny Bellies.jpeg" 
                        alt="Efo Riro - Nigerian Spinach Stew" 
                        className="w-48 h-48 object-cover rounded-md" 
                    />
                    <h1 className="mt-2 text-lg font-semibold">Traditional Meals</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>

                {/* Item 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img 
                        src="public/Muboora Recipe (Pumpkin Leaves).jpeg" 
                        alt="Muboora Recipe (Pumpkin Leaves)" 
                        className="w-48 h-48 object-cover rounded-md" 
                    />
                    <h1 className="mt-2 text-lg font-semibold">African Foods</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Kienyenji;
