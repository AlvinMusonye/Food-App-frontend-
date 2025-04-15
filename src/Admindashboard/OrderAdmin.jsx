import { useState } from "react";

const Orders = () => {
  // Sample order data (Replace with API data if needed)
  const [orders, setOrders] = useState([
    { id: "#001", customer: "John Doe", amount: "Ksh 3000", status: "Delvered" },
    { id: "#002", customer: "Jane Smith", amount: "Ksh 2030", status: "Pending Delivery" },
    { id: "#003", customer: "Bob Marley", amount: "Ksh 1570", status: "Delivered" },
    { id: "#004", customer: "Wahome Jeremy", amount: "Ksh 1970", status: "Pending Delivery" },
    { id: "#005", customer: "Marvin Maina", amount: "Ksh 570", status: "Delivered" },
  ]);

  const [search, setSearch] = useState("");

  // Filter orders based on search input
  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-dark-default">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 dark:bg-dark-default dark:text-gray-100" >
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>

 
        <input
          type="text"
          placeholder="Search customer..."
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-orange-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

    
        <div className="overflow-x-auto dark:bg-dark-default dark:text-gray-100">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="py-2 px-4 border">Order ID</th>
                <th className="py-2 px-4 border">Customer</th>
                <th className="py-2 px-4 border">Amount</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                  <tr key={index} className="text-center border ">
                    <td className="py-2 px-4 border">{order.id}</td>
                    <td className="py-2 px-4 border">{order.customer}</td>
                    <td className="py-2 px-4 border">{order.amount}</td>
                    <td className="py-2 px-4 border">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Go Back Button */}
        <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
