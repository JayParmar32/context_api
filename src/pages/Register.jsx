import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    console.log("Registered:", { username, email, password });
    navigate("/");
  };

  const heandleUsername =(e)=>{
     setUsername(e.target.value)
  }

  const handleemail = (e)=>{
     setEmail(e.target.value)
  }

  const handlepassword =(e)=>{
     setPassword(e.target.value)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          Register
        </h2>
        <form onSubmit={register} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-green-300"
              value={username}
              onChange={heandleUsername}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-green-300"
              value={email}
              onChange={handleemail}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-green-300"
              value={password}
              onChange={handlepassword}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
