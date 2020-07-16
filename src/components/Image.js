import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Image =()=> {
    let url = 'http://ok-myhome.herokuapp.com/uploads/upload/:path'   
    const [image, setImage] = useState([])
    const [img, setImg_url] = useState([])
    

    // useEffect(()=>{
    //     getImage()
    // },[])

    // const getImage = async () => {
    //     const result = await axios.get(url)
    //     setImage(result.data)
    //     console.log(result.data)
    // }

    const addImage = async () => {
        const result = await axios.post(url,{
            img
            
        }) 
        // getImage()
      
    }

    
    // const printImage = () => {
    //     if ( image && image.length )
    //         return image.map((admin,index) => {
    //             return (
    //                 <li key={index}>
    //                    {admin.image} 
  

    //                 </li>
    //             )
             
    //         })
    //     else {
    //         return (<h2>No Keephome </h2>)
    //     }

    // }

    return (
        <div >
{/*            
                {printImage()} */}
          <br/>
            
            

           <br/>
                <input 
                onChange={(e)=> setImage(e.target.value)}
                type='file'
                value={image}
                name='image'
                placeholder='Enter Image'
                /><br/>

              
                 <button  onClick={addImage}>ADD MY HOME</button>  
        </div>
    )
  
 }

 export default Image;
 