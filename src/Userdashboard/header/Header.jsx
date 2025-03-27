import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="p-4 sm:p-8 md:p-12">
            <div className=" h-64 md:h-80 lg:h-96 bg-[url('public/cd569c2c-def5-41cd-a03d-624ccd8b6503.jpeg')] bg-cover bg-center relative flex items-center justify-center   md:justify-end pr-4 md:pr-10">
                <div className="text-center md:text-right">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Order Your Favourite Food Here
                    </h1>
                    <p className="text-sm sm:text-lg text-gray-600 mt-2">
                        Choose from the best Restaurants Around You!!!
                    </p>
                    <Link to='/restaurant'>
                        <button className="mt-4 px-4 sm:px-6 py-2 border rounded-2xl border-orange-500 bg-orange-500 text-white font-semibold hover:bg-orange-600 cursor-pointer hover:text-black transition">
                            View Restaurants
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Header;
