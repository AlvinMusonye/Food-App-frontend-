import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode"; // FIXED IMPORT ✅

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // console.log("Found Token in LocalStorage:", token);
        const decodedUser = jwtDecode(token);
        // console.log("Decoded User:", decodedUser);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (token, navigate) => { // ✅ Receive navigate as a parameter
    console.log("Login function called");
    localStorage.setItem("token", token);

    try {
      const decodedUser = jwtDecode(token);
      console.log("Decoded User after Login:", decodedUser);
      setUser(decodedUser);
      navigate(decodedUser.role === "admin" ? "/admin-dashboard" : "/user-dashboard"); // ✅ Redirect after login
    } catch (error) {
      console.error("Error decoding token", error);
    }
  };

  const logout = (navigate) => { 
    console.log("Logout function called");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login"); 
  };

  return (

    <div>
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
