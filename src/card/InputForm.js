import React from 'react';
import './InputForm.css';
import {useDispatch ,useSelector} from 'react-redux';
import axios from 'axios'

const InputForm = props => {
    const { data, onChange } = props;

    const dispatch = useDispatch();
    const bears = useSelector(state => state.bear);
    const form = useSelector(state => state.form);

    const addBear = async () => {
        console.log(form)
        const result = await axios.post(`http://ok-myhome.herokuapp.com/api/home/`,form)
        dispatch({
            type: 'ADD_BEAR', 
            bear: {...form, id: bears.lenght > 0 ? bears[bears.lenght -1] .id+1 : 0 } 
        })
    }

    return (
        <div className='form-container'>
            <h2>Add bear</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Tel</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={addBear}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm