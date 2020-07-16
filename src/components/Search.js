import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Search =()=> {
    const SearchAPI = 'http://ok-myhome.herokuapp.com/search/myhome'
    const [search, setSearch] = useState({})
    console.log(search)
    const [fPrice, setfPrice] = useState('')
    const [ePrice, setePrice] = useState('')
    const [province, setProvince] = useState('')
    const [category, setCategory] = useState('')

    // useEffect(()=>{
    //     getSearch()
    // },[])

    // const getSearch = async () => {
    //     const result = await axios.get(SearchAPI)
    //     setSearch(result.data)
    //     console.log(result.data)
    // }

    const addSearch = async () => {
       const res = await axios.post(SearchAPI,{ 
            fPrice, ePrice, province, category
       })
       console.log("res",res.data)
       

       const printSearch = (res) => {
           console.log(res)
        if ( res && res.length )
            return res.map((admin,index) => {
                return (
                    <li key={index}>
                       {admin.img_url} : {admin.name} : {admin.des} : {admin.tel} : {admin.latitude} :{admin.longitude} : {admin.price} : {admin.type} : {admin.category} : {admin.province}


                    </li>
                )
             
            })
            else {
                return (<h2>No Keephome </h2>)
            }

    }

    }
    //    getSearch()



    // const printSearch = (result) => {
    //     console.log("result",result)
    //     // if ( result && result.length )
    //     //     return result.map((admin,index) => {
    //     //         return (
    //     //             <li key={index}>
    //     //                {admin.img_url} : {admin.name} : {admin.des} : {admin.tel} : {admin.latitude} :{admin.longitude} : {admin.price} : {admin.type} : {admin.category} : {admin.province}


    //     //             </li>
    //     //         )
             
    //     //     })
    //     //     else {
    //     //         return (<h2>No Keephome </h2>)
    //     //     }

    // }


    return(
        <div>
            {/* {printSearch()} */}
             <br/>
                <input 
                onChange={(e)=> setfPrice(e.target.value)}
                type='text'
                value={fPrice}
                name='fPrice'
                placeholder='ราคาต่ำ'
                /><br/>

                <input
                onChange={(e)=> setePrice(e.target.value)}
                type='text'
                value={ePrice}
                name='ePrice'
                placeholder='ราคา'
                /><br/>

                <input
                onChange={(e)=> setProvince(e.target.value)}
                type='text'
                value={province}
                name='province'
                placeholder='จังหวัด'
                /><br/>
                
                <input
                onChange={(e)=> setCategory(e.target.value)}
                type='text'
                value={category}
                name='category'
                placeholder='ประเภท'
                /><br/>
                
                <button type='submit' onClick={addSearch}>SEARCH</button> 

                
                
        </div>    
        )

}
export default Search