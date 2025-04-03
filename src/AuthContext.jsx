import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
  
        const decodedUser = jwtDecode(token);
        
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const login = (token, navigate) => {
    console.log("Login function called");
    localStorage.setItem("token", token);

    try {
      const decodedUser = jwtDecode(token);
      console.log("Decoded User after Login:", decodedUser);
      setUser(decodedUser);
      navigate(decodedUser.role === "admin" ? "/admin-dashboard" : "/user-dashboard"); 
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
    <AuthContext.Provider value={{ user, login, logout, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
