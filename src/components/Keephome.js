import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import KeephomeList from './KeephomeList';

const Keephome =()=>{
   
    const homes = useSelector(state=> state.home);
    const dispatch = useDispatch()

     useEffect(()=>{
        getHomes();
     },[])

     const getHomes = async () => {
        const result = await axios.get(`http://ok-myhome.herokuapp.com/api/home`)
        console.log(result.data)
        dispatch({type:'GET_HOMES',homes: result.data})
      }

      

      const printHomes = () =>{
        if(homes && homes.length){
            return homes.map((home,index)=>{
                return(
               <div>
                <td>{index+1}</td>
                <td>{home.img_url}:img</td> 
                <td>{home.name}:name</td> 
                <td>{home.des}:des</td> 
                <td>{home.latitude}:latitude</td> 
                <td>{home.longitude}:longitude</td> 
                <td>{home.price}:price</td> 
                <td>{home.area}:area</td> 
                <td>{home.type}:type</td> 
                <td>{home.category}:category</td> 
                <td>{home.tel}:tel</td> 
                <td>{home.province}:province</td> 
                <td>{home.date}:date</td> 
                <KeephomeList/>
               </div>
                  
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }

  return (
    <div className="container-fluid">
         <table className="table table-bordered"  >
            
                    {printHomes()}  
            </table>
                
     
    </div>
  );
}

export default Keephome;