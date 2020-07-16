import React, { useEffect }  from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import axios from 'axios'


const InputKeephome =(props) => {
    const { data, onChange } = props;

    const dispatch = useDispatch();
    const homes = useSelector(state => state.home);
    const form = useSelector(state => state.form);
    console.log(form)

    
    useEffect(()=>{
        getHomes();
     },[])

    const getHomes = async () => {
        const result = await axios.get(`http://ok-myhome.herokuapp.com/api/home`)
        console.log(result.data)
        dispatch({type:'GET_HOMES',homes: result.data})
      }

    const addHomes = async () => {

        await axios.post(`http://ok-myhome.herokuapp.com/api/home/`,form)
        dispatch({
            type: 'ADD_HOME', 
            home: {...form} 
        })
        getHomes();
    }
    return(
        <div>
                 <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Des</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_DES', des: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Latitude</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_LATITUDE', latitude: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Longitude</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_LOGITUDE', longitude: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input  type="number" onChange={(e) => dispatch({ type: 'CHANGE_PRICE', price: e.target.value })} />
                        </td>
                    </tr> 
                    <tr>
                        <td>Area</td>
                        <td>
                            <input  type="number" onChange={(e) => dispatch({ type: 'CHANGE_AREA', area: e.target.value })} />
                        </td>
                    </tr> 
                    <tr>
                        <td>Type</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_TYPE', type: e.target.value })} />
                        </td>
                    </tr> 
                    <tr>
                        <td>Category</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_CATEGORY', category: e.target.value })} />
                        </td>
                    </tr> 
                    <tr>
                        <td>Tel</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Province</td>
                        <td>
                            <input  type="text" onChange={(e) => dispatch({ type: 'CHANGE_PROVINCE', province: e.target.value })} />
                        </td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={addHomes}>CREATE</button>
                        </td>
                    </tr>
                  
                </tbody>
            </table>
        </div>
    )
} 
export default InputKeephome;