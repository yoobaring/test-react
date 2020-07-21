
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const SearchAPI = 'http://ok-myhome.herokuapp.com/search/myhome'
    const [search, setSearch] = useState({});
    const [result, setResult] = useState([]);
    console.log(search)

    const addSearch = async () => {
        const res = await axios.post(SearchAPI, search)
        console.log("res", res.data)
        setResult(res.data);
    }

    const printSearchResult = () => {
        if (result.length <= 0)
            return (<h2>No Data </h2>)
        return result.map((admin, index) => (
            <li key={index}>
                 {admin.name} 
            </li>
        ))
    }

    return (
        <div>
            
            <input
                onChange={(e) => setSearch({ ...search, fPrice: e.target.value })}
                type='text'
                placeholder='ราคาต่ำ'
            /><br />

            <input
                onChange={(e) => setSearch({ ...search, ePrice: e.target.value })}
                type='text'
                placeholder='ราคาสูง'
            /><br />

            <input
                onChange={(e) => setSearch({ ...search, category: e.target.value })}
                type='text'
                placeholder='ประเภท'
            /><br />

            <input
                onChange={(e) => setSearch({ ...search, province: e.target.value })}
                type='text'
                placeholder='จังหวัด'
            /><br />

            <button type='submit' onClick={addSearch}>SEARCH</button> <br />

            {printSearchResult()}

        </div>
    )

}

export default Search

