import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams } from 'react-router-dom';


function Read() {
    const [data, setData] = useState([]);
const {id}=useParams();
    useEffect(() => {
        axios.get("http://localhost:3000/users/"+id)
          .then((res) => setData(res.data))
          .catch((err) => console.error(err));
        }, []);
    

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light w-100 vh-100">
      <div className='w-50 rounded  bg-white border shadow px-5 pt-3 pb-5 rounded'>
    <h1>Details of User</h1>
    <div className="mb-2">
        <strong >Name: {data.name} </strong>
    </div>
    <div className="mb-2">
        <strong >Email: {data.email} </strong>
    </div>
    <div className="mb-2">
        <strong >Phone: {data.phone} </strong>
    </div>
    <Link to={`/update/${id}`} className="btn btn-success">Edit</Link> 
    <Link to="/" className="btn btn-sm btn-primary ms-3">Back</Link> 
    </div>
    </div>
  )
}

export default Read