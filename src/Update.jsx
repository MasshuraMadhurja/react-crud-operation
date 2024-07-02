import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  //const [data, setData] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.error(err));
  }, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/"+id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.assert.log(err));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-75 rounded  bg-white border shadow p-4">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
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
              value={values.email}
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
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          <button className="btn btn-sm btn-success me-3">Update</button>
          <Link to="/" className="btn btn-sm btn-primary me-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
