import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Location =()=> {
    const LocationAPI = 'http://ok-myhome.herokuapp.com/search/location'
    const [result, setResult] = useState([]);
    const [location, setLocation] = useState({})
 


    const addSearch = async () => {
       const res = await axios.post(LocationAPI, location)
       console.log("res", res.data)
       setResult(res.data)
    }

    
    const printLocationResult = () => {
      if (result.length <= 0)
          return (<h2>No Data </h2>)
      return result.map((admin, index) => (
          <li key={index}>
               {admin.name} 
          </li>
      ))
  }

    return(
        <div>
           {printLocationResult()}

             <br/>
                <input 
                onChange={(e)=> setLocation({...location, latitude: e.target.value})}
                type='text'
                placeholder='ลาติจูด'
                /><br/>

                <input
                onChange={(e)=> setLocation({...location, longitude: e.target.value})}
                type='text'
                placeholder='ลองติจูด'
                /><br/>


                
                <button type='submit' onClick={addSearch}>SEARCH</button> 
                
        </div>    
        )
}
export default Location;