import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios.delete("http://localhost:3000/users/" + id)
        .then(res => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mt-5 pt-4">Crud Operation</h1>
      <div className="col-12 col-md-10 col-lg-8 bg-white shadow p-4 rounded">
        <div className="d-flex justify-content-end mb-3">
          <Link to='/create' className="btn btn-success">Add +</Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className="btn btn-info btn-sm me-2">Read</Link>
                    <Link to={`/update/${d.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                    <button onClick={() => handleDelete(d.id)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
