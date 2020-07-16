import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const KeephomeList = () => {

    const dispatch = useDispatch();
    const homes = useSelector(state=> state.home);
    const form = useSelector(state => state.form)

    useEffect(()=>{
        getHomes();
     },[])

     const getHomes = async () => {
        const result = await axios.get(`http://ok-myhome.herokuapp.com/api/home`)
        console.log(result.data)
        dispatch({type:'GET_HOMES',homes: result.data})
      }

    const deleteHome = async (props) => {
         await axios.delete(`http://ok-myhome.herokuapp.com/api/edit/${props.id}`)
        dispatch({ type: 'DELETE_HOME', id: props.id })
        getHome();
      }

      const updateHome = async (props)=> {
        await axios.put(`http://ok-myhome.herokuapp.com/api/edit/${props.id}`,form )
        dispatch({ type: 'UPDATE_HOME', id: props.id, home: {...form, id: props.id} })
      }

    return (
        <div>
            <div >
                <button onClick={updateHome}>Update</button>
                <button onClick={deleteHome}>Delete</button>
            </div>
        </div>

    )
}

export default KeephomeList;