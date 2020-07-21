import React, { useState } from 'react'
import axios from 'axios'


// const API_BASE = "http://localhost:4444"
const API_BASE = "https://ok-myhome.herokuapp.com"


function submitForm(contentType, data, setResponse) {

    console.log('data ', data);

    axios({
        url: `${API_BASE}/uploads/upload`,
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': contentType
        }
    }).then((response) => {
        setResponse(response.data);
    }).catch((error) => {
        setResponse("error");
    })
}

export default function AddNewhome() {

    const [Files, setFiles] = useState(null)
    const [result, setResult] = useState([]);
    

    function uploadWithFormData() {
        console.log('data', Files);

        const formData = new FormData();
        for (let i = 0; i < Files.length; i++) {
            formData.append(`file`, Files[i])
        }

       

        submitForm("multipart/form-data", formData, (msg) => 
        console.log("res",msg));
        
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
            {printSearchResult()}
            <input type="file"  name="file" onChange={e => setFiles(e.target.files)} multiple />
            <input type="button" value="Upload as Form" onClick={uploadWithFormData} />
        </div>
    )
}
