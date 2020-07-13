import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const KeephomeList = (props) => {

    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const deleteHome = async () => {
        const result = await axios.delete(`http://ok-myhome.herokuapp.com/api/edit/${props.id}`)
        dispatch({ type: 'DELETE_HOME', id: props.id })
      }

      const updateHome = async () => {
        const result = await axios.put(`http://ok-myhome.herokuapp.com/api/edit/${props.id}`,form )
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