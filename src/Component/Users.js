import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserFromAPI();
  }, []);


  //method to get the users from API
  const getUserFromAPI = () => {
    axios
      .get("http://localhost:3005/Users")
      .then((result) => {
        if (result.status === 200) {
          setUsers(result?.data);
        }
      })
      .catch((error) => {
        console.log("rejected");
        console.log(error);
      });
  };


  // returns the user in tabular form 
  return (
    <div>

      <Link to="/add-user" className="btn btn-secondary">Add New User</Link> <br/> <br/>
      <h4>List of Users</h4> <br/>


      {/* <ul>
        {users.length
          ? users.map((item) => (
              <li key={item.id}>
                {item.id} | {item.name}| {item.email}
              </li>
            ))
          : null}
      </ul> */}

            <table className="table table-striped">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </thead>

                <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> <Link to={"/user-details/"+user.id} className="btn btn-secondary"> View Details</Link> </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  );
}
