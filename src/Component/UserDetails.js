import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {
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

  const deleteUserById = () => {
    axios
      .delete("http://localhost:3005/Users/" + id)
      .then((result) => {
        console.log(result);
        alert("User Deleted Successfully");
        navigate("/users");
      })
      .catch();
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          Details of <b> {currentUser.name}</b>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"> Id: {currentUser.id}</li>
          <li className="list-group-item"> Name: {currentUser.name}</li>
          <li className="list-group-item"> Email: {currentUser.email}</li>
        </ul>
        <div className="card-footer">
          <button onClick={deleteUserById} className="btn btn-danger">
            Delete
          </button>{" "}
          &nbsp;
          <Link to={"/edit-user/" + currentUser.id} className="btn btn-secondary">
            Edit
          </Link>
          &nbsp;
          <Link to="/users" className="btn btn-secondary">
            Users List
          </Link>
        </div>
      </div>
    </div>
  );
}
