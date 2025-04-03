import { useEffect, useState } from "react";
import axios from "axios";
import NavAdmin from "./Admindashboard/NavAdmin";
import MainAdmin from "./Admindashboard/MainAdmin";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/orders/${id}`, { status });
      fetchOrders(); // Refresh orders after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:text-dark-contrast">
      <NavAdmin />
      
      <div className="flex-1 p-6 dark:bg-dark-contrast">
        <MainAdmin />
        
        {/* Orders Management Table */}
       
      </div>
    </div>
  );
};

export default AdminDashboard;
