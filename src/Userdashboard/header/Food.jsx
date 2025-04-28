import React from "react";
import { Link } from "react-router-dom";

function Food() {
    return (
        <div className="p-6  min-h-screen">
            <h1 className="text-center font-bold mt-7 text-3xl text-orange-500 mb-8 underline">
                Select A Category
            </h1>
            <p className="text-gray-600 text-lg text-center dark:text-gray-100 pb-5">
                Delicious and quick meals, perfect for when you're on the go!
            </p>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast ">
                    <img
                        src="/Food & Travel With Hugh Harper (@hungryhugh) •….jpeg"
                        alt="Fast Food"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                   
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Fast Food</h1>
                    <Link to="fastfood" className="mt-4 w-full">
                        <button className="w-full  cursor-pointer px-6 py-2 border border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition ">
                            View More
                        </button>
                    </Link>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/Kenyan Kunde _ Mboga Kienyeji (Cowpeas Leaves) Recipe.jpeg"
                        alt="kienyenji"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Kienyenji</h1>
                    <Link to="kienyenji" className="mt-4 w-full">
                        <button className="w-full px-6  py-2 border cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/31 Best Desserts in Paris to Try in 2022.jpeg"
                        alt="Pastry"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Pastry</h1>
                    <Link to="pastry" className="mt-4 w-full">
                        <button className="w-full px-6 py-2  border cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>



                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/Instagram.jpeg"
                        alt="Fast Food"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Kid's Meals</h1>
                    <Link to="kidmeal" className="mt-4 w-full">
                        <button className="w-full px-6 py-2 border  cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/c524801b-21c0-4793-9c0b-9274a22944f0.jpeg"
                        alt="Fast Food"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Fruits</h1>
                    <Link to="fruit" className="mt-4 w-full">
                        <button className="w-full px-6 py-2 border cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/6839509f-ac7f-46eb-8066-36eddd2a055a.jpeg"
                        alt="Fast Food"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Beverages</h1>
                    <Link to="Beverages" className="mt-4 w-full">
                        <button className="w-full px-6 py-2 border  cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/b585749e-9c53-48d9-8912-f52c056f6ed3.jpeg"
                        alt="Fast Food"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Vegetable</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full px-6 py-2 border  cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center dark:bg-dark-contrast">
                    <img
                        src="/Cajun Seafood Boil with Garlic Butter Sauce.jpeg"
                        alt="Sea Food"
                        className="w-52 h-52 object-cover rounded-md"
                    />
                    <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Sea Food</h1>
                    <Link to="#" className="mt-4 w-full">
                        <button className="w-full px-6 py-2 border cursor-pointer border-orange-500 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 hover:text-black transition">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Food;
