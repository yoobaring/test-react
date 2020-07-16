import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form =()=> {
    let url = 'http://ok-myhome.herokuapp.com/api/home'   
    const [myhome, setMyhome] = useState([])
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [latitude, setLatitide] = useState('')
    const [longitude, setLongitude] = useState('')
    const [tel, setTel] = useState('')
    const [price, setPrice] = useState('')
    const [area, setArea] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [province, setProvince] = useState('')

    useEffect(()=>{
        getMyhome()
    },[])

    const getMyhome = async () => {
        const result = await axios.get(url)
        setMyhome(result.data)
        console.log(result.data)
    }

    const addMyhome = async () => {
        const result = await axios.post(url,{
            name,des,latitude,longitude,tel,price,area,type,category,province
        }) 
        getMyhome()
      
    }

    const updateMyhome = async (id) => {
        const result = await axios.put(`http://ok-myhome.herokuapp.com/api/edit/${id}`,{
            name,des,latitude,longitude,tel,price,area,type,category,province
        })      
        setName(result.data.name)
        setDes(result.data.des)
        setLatitide(result.data.latitude)
        setLongitude(result.data.longitude)
        setTel(result.data.tel)
        setPrice(result.data.price)
        setArea(result.data.area)
        setType(result.data.type)
        setCategory(result.data.category)
        setProvince(result.data.province)
        getMyhome();
    }
    

    const deleteMyhome = async (id) => {
        await axios.delete(`http://ok-myhome.herokuapp.com/api/edit/${id}`)
        getMyhome()
    }   

    const printMyhome = () => {
        if ( myhome && myhome.length )
            return myhome.map((admin,index) => {
                return (
                    <li key={index}>
                       {admin.name} : {admin.des} : {admin.tel} : {admin.latitude} :{admin.longitude} : {admin.price} : {admin.type} : {admin.category} : {admin.province}
                       <button onClick={ ()=> updateMyhome(admin.id)}>UPDATE</button> 
                       <button onClick={ ()=> deleteMyhome(admin.id)}>DELETE</button>

                    </li>
                )
             
            })
        else {
            return (<h2>No Keephome </h2>)
        }

    }

    return (
        <div >
           
                {printMyhome()}
          <br/>
            
           GET MY HOME : {name} {des} {tel} {latitude} {longitude} {price} {type} {area} {category} {province} 

           <br/>
                <input 
                onChange={(e)=> setName(e.target.value)}
                type='text'
                value={name}
                name='name'
                placeholder='Enter name'
                /><br/>

                <input
                onChange={(e)=> setDes(e.target.value)}
                type='text'
                value={des}
                name='des'
                placeholder='Enter description'
                /><br/>

                <input
                onChange={(e)=> setTel(e.target.value)}
                type='text'
                value={tel}
                name='tel'
                placeholder='Enter tel'
                /><br/>

                <input
                onChange={(e)=> setLatitide(e.target.value)}
                type='text'
                value={latitude}
                name='latitude'
                placeholder='Enter latitude'
                /><br/>
                
                <input
                onChange={(e)=> setLongitude(e.target.value)}
                type='text'
                value={longitude}
                name='longitude'
                placeholder='Enter longitude'
                /><br/>


                <input 
                onChange={(e)=> setPrice(e.target.value)}
                type='text'
                value={price}
                name='price'
                placeholder='Enter price'
                /><br/>

               <input 
                onChange={(e)=> setArea(e.target.value)}
                type='text'
                value={area}
                name='area'
                placeholder='Enter area'
                /><br/>

                <input 
                onChange={(e)=> setType(e.target.value)}
                type='text'
                value={type}
                name='type'
                placeholder='Enter type'
                /><br/>
                
                <input 
                onChange={(e)=> setCategory(e.target.value)}
                type='text'
                value={category}
                name='category'
                placeholder='Enter category'
                /><br/>

                <input 
                onChange={(e)=> setProvince(e.target.value)}
                type='text'
                value={province}
                name='province'
                placeholder='Enter province'
                /><br/>

                 <button  onClick={addMyhome}>ADD MY HOME</button>  
        </div>
    )
  
 }

 export default Form;
 