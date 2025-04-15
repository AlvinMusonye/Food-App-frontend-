import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import Unauthorized from "./Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Userdashboard/pages/Home";
import Navbar from "./Userdashboard/Navbar";
import Footer from "./Userdashboard/Footer";
import Restaurant from "./Userdashboard/pages/Restaurant";
import FastFood from "./Userdashboard/pages/FastFood";
import Beverages from "./Userdashboard/pages/Beverages"
import Kienyenji from "./Userdashboard/pages/Kienyenji"
import Cart from "./Userdashboard/Cart";
import { CartProvider } from "./Userdashboard/CartContext"; 
import Kfcmenu from "./Userdashboard/pages/Kfcmenu";
import Kienyenjimenu from "./Userdashboard/menus/Kienyenjimenu";
import Pastrymenu from "./Userdashboard/menus/Pastrymenu";
import Pastry from "./Userdashboard/pages/Pastry";
import Kidmeal from "./Userdashboard/pages/Kidmeal";
import Kidmenu from "./Userdashboard/menus/Kidmenu";
import Fruit from "./Userdashboard/pages/Fruit";
import Fruitmenu from "./Userdashboard/menus/Fruitmenu";
import Beveragesmenu from "./Userdashboard/menus/Beveragesmenu";
import Mpesa from "./Userdashboard/Mpesa";
import Deliveries from "./Admindashboard/Deliveries";
import Orders from "./Admindashboard/OrderAdmin";
import RestaurantReviews from "./Userdashboard/pages/RestaurantReviews";
import OffersPage from "./Userdashboard/header/offersPage";
import Product from "./Admindashboard/Product";
import SignIn from "./Signin";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/unauthorized" element={<Unauthorized />} />


            <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/mpesa" element={<Mpesa />} />
              <Route path="/user-dashboard/fastfood" element={<FastFood />} />
              <Route path="/user-dashboard/Beverages" element={<Beverages />} />
              <Route path="/user-dashboard/kienyenji" element={<Kienyenji />} />
              <Route path="/user-dashboard/pastry" element={<Pastry />} />
              <Route path="/user-dashboard/kidmeal" element={<Kidmeal />} />
              <Route path="/user-dashboard/fruit" element={<Fruit />} />
              <Route path="/user-dashboard/fastfood/kfcmenu" element={<Kfcmenu />} />
              <Route path="/user-dashboard/kidmeal/kidmenu" element={<Kidmenu />} />
              <Route path="/user-dashboard/kienyenji/Kienyenjimenu" element={<Kienyenjimenu />} />
              <Route path="/user-dashboard/pastry/pastrymenu" element={<Pastrymenu />} />
              <Route path="/user-dashboard/fruit/fruitmenu" element={<Fruitmenu />} />
              <Route path="/user-dashboard/Beverages/beveragesmenu" element={<Beveragesmenu />} />
              <Route path="/search" element={<RestaurantReviews />} />


            </Route>
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/deliveries" element={<Deliveries /> } />
              <Route path="/orders" element={<Orders /> } />
              <Route path="/settings" element={<Product /> } />
              
            </Route>
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
