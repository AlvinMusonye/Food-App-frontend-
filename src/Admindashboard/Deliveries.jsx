import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./NavAdmin";
import { Link } from "react-router-dom";

const Deliveries = () => {
  const { DeliveryNumber } = useParams();
  const [deliveryData] = useState([
    {
      eventDescription: "Order Confirmed",
      city: "Nairobi",
      street: "Kileleshwa",
      bikeType: "Electric Scooter",
    },
    {
      eventDescription: "Dispatched",
      city: "Westlands",
      street: "Sarit Center",
      bikeType: "Motorbike",
    },
    {
      eventDescription: "Out for Delivery",
      city: "Kilimani",
      street: "Ngong Road",
      bikeType: "Bicycle",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-dark-default">
      {/* Sidebar (NavAdmin) */}
      <div className=" bg-white shadow-md p-4 dark:bg-dark-default">
        <Nav />
      </div>

      {/* Main Content */}
      <Link to="/admin-dashboard" ><button className="text-white mt-6 border-2 bg-orange-500 border-orange-500">Go Back</button></Link>
      <div className="w-3/4 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 dark:bg-dark-default">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-100">Delivery Details</h1>
          <p className="text-gray-400 mb-4">
            <span className="font-semibold">Tracking Number:</span> {DeliveryNumber}
          </p>

          <div className="space-y-4">
            {deliveryData.map((delivery, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 border-l-4 dark:bg-dark-default dark:text-gray-100 border-orange-500 rounded-lg shadow"
              >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">{delivery.eventDescription}</h2>
                <p className="text-gray-400">
                  <span className="font-semibold dark:text-gray-100">City:</span> {delivery.city}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold dark:text-gray-100">Street:</span> {delivery.street}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold dark:text-gray-100">Bike Type:</span> {delivery.bikeType}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
