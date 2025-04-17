import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import axios from "axios";

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Extract total price from URL parameters
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const total = params.get("total");
    if (total) {
      setAmount(total); // Set total amount automatically
      const getToken = async() => {
        const response = await fetch (`${import.meta.env.VITE_TRANSACTION_BASE_URL}/api/orders/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify(
            {
              username: import.meta.env.VITE_USERNAME,
              password: import.meta.env.VITE_PASSWORD
            }
          )
        });
        const responseData = await response.json();
        console.log(responseData);
        const accessToken = responseData.access_token;
        localStorage.setItem("AuthToken", accessToken);
        console.log(`Token from  getToken: ${localStorage.getItem("AuthToken")}`);
      }
      getToken();
    }
  }, [location]);

  useEffect(() => {
    
  }, [])

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const authToken = localStorage.getItem("AuthToken");
      console.log(`Token from STKPush: ${localStorage.getItem("AuthToken")}`);
      const response = await fetch(`${import.meta.env.VITE_TRANSACTION_BASE_URL}/api/orders/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            token: authToken,
            phoneNumber: phoneNumber,
            amount: amount,
            invoiceNumber: "AlvinJr-Food Place",
          })
      });

      if (response.ok) {
        setMessage("Payment request sent. Check your phone!");
      } else {
        setMessage("Payment failed. Try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
  <div className="dark:bg-dark-contrast">
      <div className="max-w-md h-screen mx-auto p-6 bg-white shadow-lg rounded-lg  dark:bg-dark-contrast">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <img src="public/Assets/Mpesa Withdrawal Charges 2022 Latest Update.jpeg" alt="Mpesa Logo" className="w-12 h-12 object-cover rounded-full" />
        <h2 className="text-2xl font-bold text-green-600">Lipa Na M-Pesa</h2>
      </div>

      <form onSubmit={handlePayment} className="space-y-4 mt-6">
        <input
          type="text"
          placeholder="Enter Phone Number (2547XXXX)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300 dark:ring-white dark:text-gray-100"
        />

        <input
          type="number"
          value={amount}
          readOnly 
          className="w-full px-4 py-2 border rounded-lg bg-gray-200"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay Ksh ${amount}`}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-lg font-semibold text-gray-700">{message}</p>}
    </div>
  </div>
  );
};

export default MpesaPayment;
