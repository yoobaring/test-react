import React, { useState } from "react";
import axios from "axios";


const authAPI = 'http://ok-myhome.herokuapp.com/user/login'

const Login = props => {

  const [datauser, setUser] = useState({});  //จากinput
  console.log(datauser);

const login = async () => {


  let res = await axios.post(authAPI, datauser);

  console.log("res",res.data.success);
  if (res.data.success){
       alert("Login Success");
       props.history.push("/form");
  }
  else{      
    alert("username หรือ password คุณป้อนไม่ถูกต้อง");
  }


};


  return (
    <div >

          <form >
        
            <div >
              <input
                type="username"
                
                placeholder="Username"
                onChange={(e) => setUser({...datauser,username: e.target.value})}
              />
            </div>
            <div >
              <input
                type="password"
                
                placeholder="Password"
                onChange={(e) => setUser({...datauser,password: e.target.value})}
              />
            </div>
            <button href='/form' onClick={login} >Login</button>

          </form>

    </div>
  )
}

export default Login;
