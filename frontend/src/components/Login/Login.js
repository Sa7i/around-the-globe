import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [user, setUser] = useState()
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target
    setUser(value)
  }

  const handleSubmit = () => {
    axios.post('/users/login', [user]).then((response) => {
      console.log('users', response.data[0])
      setUser(response.data[0])
      localStorage.setItem(`${response.data[0].id}`, response.data[0].username)
      navigate('/home')
    })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center ">
      <div className="shadow-md rounded-lg bg-white p-6">
        {/* <form onSubmit={handleSubmit}> */}
        <div className="text-center">
          <label >Username</label>
        </div>
        <div className="">
          <input
            className="border-2 border-blue-700 rounded-md"
            name='username' type='user' onChange={handleChange} />
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={handleSubmit}>Login</button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Login;

