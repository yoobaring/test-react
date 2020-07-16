import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Location =()=> {
    const SearchAPI = 'http://ok-myhome.herokuapp.com/search/location'
    const [search, setSearch] = useState({})
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')


    const addSearch = async () => {
       const res = await axios.post(SearchAPI,{ 
            latitude, longitude
       })
       console.log(res.data)
    }

    return(
        <div>
             <br/>
                <input 
                onChange={(e)=> setLatitude(e.target.value)}
                type='text'
                value={latitude}
                name='latiitude'
                placeholder='ลาติจูด'
                /><br/>

                <input
                onChange={(e)=> setLongitude(e.target.value)}
                type='text'
                value={longitude}
                name='longitude'
                placeholder='ลองติจูด'
                /><br/>


                
                <button type='submit' onClick={addSearch}>SEARCH</button> 
                
        </div>    
        )
}
export default Location;