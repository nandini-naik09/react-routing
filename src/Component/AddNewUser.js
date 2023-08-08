import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddNewUser() {
  const initialUserState = {
    id: 0,
    name: "",
    email: "",
  };

  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  const resetUser = () => {
    setUser(initialUserState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users/", user)
      .then((result) => {
        alert("User added succssfully.")
        console.log(result);
        resetUser();
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create new user</h1>
      <form onSubmit={saveUser}>
        <div className="mb-3">
          <label className="form-label"> User Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Please enter your Name"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label"> Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Please enter your Email"
          ></input>
        </div>
        <div>
          <Link to="/users" className="btn btn-secondary">
            Users List
          </Link>{" "}
          &nbsp;
          <button className="btn btn-success">Add New User</button> &nbsp;
          <button type="reset" className="btn btn-danger">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
