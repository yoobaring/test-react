import React ,{useState}from "react";
import axios from "axios";

const userAPI = 'http://ok-myhome.herokuapp.com/user/register'


const Registration = (props) => {

  const [data , setData] = useState({})


  const createuser = async () => {

    console.log(data);
    
    let res = await axios.post(userAPI, data);
    console.log("res",res.data.message);
    
    if (res.data.message === 'Username already exists'){
      alert("มีชื่อผู้ใช้อยู่แล้ว");
    }
    if(res.data.message === '\"name\" length must be at least 6 characters long'){
      alert("ชื่อต้องมีความยาวมากกว่า 6 ตัวอักษร");
    }
    if(res.data.message === '\"password\" length must be at least 6 characters long'){
      alert("รหัสผ่านต้องมีความยาวมากกว่า 6 ตัว");
    }    
    else{     
      alert("Create Success");
      props.history.push("/login");
    }

  };
  console.log(data);
return (
        
<div>

     
          <form action="/" id="signup-form">
            <input type="name"  placeholder="ชื่อ สกุล" onChange={(e)=> { setData({...data, name : e.target.value})}}/>
            <br/><input type="username"  placeholder="ชื่อผู้ใช้" onChange={(e)=> { setData({...data, username : e.target.value})}}/>
            <br/><input type="email"  placeholder="อีเมล์" onChange={(e)=> { setData({...data, email : e.target.value})}}/>
            <br/><input type="password"  placeholder="รหัสผ่าน" onChange={(e)=> { setData({...data, password : e.target.value})}}/>
            <br/><input type="password"  placeholder="ยืนยันรหัสผ่าน" onChange={(e)=> { setData({...data, password : e.target.value})}}/>
            <br/><button type="submit"   onClick = {createuser}>ลงชื่อ</button>
          </form>
          

</div>
)
}
export default Registration;





