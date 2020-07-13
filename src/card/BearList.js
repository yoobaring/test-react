import React, { useEffect } from 'react';
import BearCard from './BearCard';
import './BearList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const BearList = props => {

    const bears = useSelector(start => start.bear);
    const dispatch = useDispatch();

    const getBears = async () => {
        const result = await axios.get(`http://ok-myhome.herokuapp.com/api/home`)
        const action = { type: 'GET_BEARS', bears: result.data }
        dispatch(action);
        console.log(action)
      }

      useEffect(() => {
        getBears()
      }, [])


    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;