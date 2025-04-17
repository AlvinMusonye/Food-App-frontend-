import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your API call
    console.log("Restaurant Registered:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      address: "",
      contact: "",
      email: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 dark:bg-dark-contrast bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">Register a Restaurant</h2>
      {submitted && (
        <div className="mb-4 text-orange-600 font-semibold">Restaurant registered successfully!</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-orange-500">Restaurant Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium text-orange-500">Address</label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block font-medium text-orange-500">Contact Number</label>
          <input
            type="tel"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block font-medium text-orange-500">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
        >
          Register Restaurant
        </button>
      </form>
    </div>
  );
};

export default Registration;
