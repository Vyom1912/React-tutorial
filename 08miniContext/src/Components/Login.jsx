import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
// import UserContextProvider from "../Context/UserContextProvider";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className='text-center bg-gray-400 text-white flex flex-col gap-3 justify-center items-center py-30'>
      <h2>Login</h2>
      <input
        type='text'
        name=''
        id=''
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
        className=' border-1 px-4 py-2 w-100'
      />
      <input
        type='password'
        name=''
        id=''
        className=' border-1 w-100 px-4 py-2'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className=' border-1 w-100 px-4 py-2 bg-orange-500'
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
