import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let { id } = useParams();
  const navigate = useNavigate();
  const initialUserState = {
    id: 0,
    name: "",
    email: "",
  };

  const [currentUser, setCurrentUser] = useState(initialUserState);

  useEffect(() => {
    if (id) GetUserById();
  }, []);

  const resetUser = () => {
    setCurrentUser(initialUserState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const GetUserById = () => {
    axios
      .get("http://localhost:3005/Users/" + id)
      .then((result) => {
        setCurrentUser(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const UpdateUser = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3005/Users/" + currentUser.id, currentUser)
      .then((result) => {
        alert("Changes saved succssfully.");
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
      <h1>EditUser</h1>
      <form onSubmit={UpdateUser}>
        <div className="mb-3">
          <label className="form-label"> User Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={currentUser.name}
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
            value={currentUser.email}
            onChange={handleInputChange}
            placeholder="Please enter your Email"
          ></input>
        </div>
        <div>
          <Link to="/users" className="btn btn-secondary">
            Users List
          </Link>{" "}
          &nbsp;
          <button className="btn btn-success">Save</button> &nbsp;
          <button type="reset" className="btn btn-danger">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
