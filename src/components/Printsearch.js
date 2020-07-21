
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'

const Printsearch = () => {


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

            {printSearchResult()}

        </div>
    )

}

export default Printsearch

