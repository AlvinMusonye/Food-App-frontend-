import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked"); 

    
    const adminToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJleHAiOjE3MzU2ODk2MDB9.abc123";
    const userToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImV4cCI6MTczNTY4OTYwMH0.xyz456";

  
    const token = email === "admin@example.com" ? adminToken : userToken;
    
    console.log("Generated Token:", token); 
    
    login(token, navigate); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark-contrast">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md dark:bg-dark-default ">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 dark:text-gray-200" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 dark:text-gray-200" 
          />
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>
          <p className="dark:text-gray-100">Dont have an Account ???!     <Link to='/signin' className="text-orange-500 underline">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
