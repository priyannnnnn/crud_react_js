import React from 'react'

import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent(){
    
    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate();
    const {id} =useParams();
    
    function handleSubmit(event){
        console.log("this id = ",id)
        event.preventDefault();
        axios.put('http://localhost:8081/NewTable/'+id, { name, email})
        .then(res => {
            console.log(res.data);
            navigate('/');
        }).catch(err => console.error("Update Error",err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>UpdateStudent</h2>
                    {/* <div className="mb-2">
                        <label htmlFor="">id1</label>
                        <input type="id" placeholder="Enter Id" className="form-control"
                        onChange={e => setId(e.target.value)}/>
                    </div> */}
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">UpdateStudent</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent;