import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.assert.log(err));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-75 rounded  bg-white border shadow p-4">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          <button className="btn btn-sm btn-success me-3">Submit</button>
          <Link to="/" className="btn btn-sm btn-primary me-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
