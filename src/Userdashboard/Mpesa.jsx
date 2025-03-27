import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
    }
  }, [location]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:4000/api/mpesa/pay", {
        phoneNumber,
        amount,
      });

      if (response.data.success) {
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
    <div className="max-w-md h-screen mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <img src="/Mpesa Withdrawal Charges 2022 Latest Update.jpeg" alt="Mpesa Logo" className="w-12 h-12 object-cover rounded-full" />
        <h2 className="text-2xl font-bold text-green-600">Lipa Na M-Pesa</h2>
      </div>

      <form onSubmit={handlePayment} className="space-y-4 mt-6">
        <input
          type="text"
          placeholder="Enter Phone Number (2547XXXX)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
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
  );
};

export default MpesaPayment;
