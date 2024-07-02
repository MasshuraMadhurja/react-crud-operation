import React from 'react';
import {Link} from 'react-router-dom';

function Create() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className='w-75 rounded  bg-white border shadow p-4'>
    <h1>Add a User</h1>
    <form action="">
        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name"/>
        </div>
        <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="text" name="email" className="form-control" placeholder="Enter Email"/>
        </div>
        <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter Name"/>
        </div>
       
 <button className="btn btn-sm btn-success me-3">Submit</button> 
  <Link to="/" className="btn btn-sm btn-primary me-3">Back</Link> 
  
    </form>
    
    
    </div>
    </div>
  )
}

export default Create