import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Login() {
  const [user, setUser] = useState()
  
  const handleChange = (event) => {
    const {value, name} = event.target
    setUser(value)
  }

  const handleSubmit = () => {
    axios.post('/users/login', [user]).then((response) => {
        
        console.log(response)
    //   setUser(response)
      console.log(response.data)
      alert('User is logged')
      // navigate to home page

    })
    .catch((error) => {
      alert(error)
    })
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label >Username</label>
      <input name='username' type='user' onChange={handleChange}/>
      <br/>
      <button type="submit">Login</button>
    </form>
  </div>;
}

export default Login;

