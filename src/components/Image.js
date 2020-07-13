import React from 'react'
import axios from 'axios'
import {useDispatch ,useSelector} from 'react-redux';

const Image =()=> {

    const { image, upload } = props;

    const dispatch = useDispatch();
    const homes = useSelector(state => state.home);
    const form = useSelector(state => state.form);

    const addImage = async () => {
        console.log(form)
        const result = await axios.post(`http://ok-myhome.herokuapp.com/uploads/upload/`,form)
        dispatch({
            type: 'ADD_IMG', 
            home: {...form, id: homes.lenght > 0 ? homes[homes.lenght -1] .id+1 : 0 } 
        })
    }

    return(
        <div>
          <td>
               <input  type="file" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img_url: e.target.value })} />
          </td>
          <button onClick={addImage}>CREATE</button>
        </div>
    )
}
export default Image