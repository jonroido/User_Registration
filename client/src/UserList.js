import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api"
export const UserList = () => {
  const [items, setItems] = useState([{
    _id:"123",
    firstName:"John Lloyd",
    lastName:"Trinidad",
    email:"jltrinidad@gmail.com",
    username:"jltrinidad",
    password:"eqwsac213sd12e12sadasd12321sadasd12"
  }]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers()
      setItems(users)
    }
    fetchUsers()
  }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>User Management</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <Link to={`/edit/${user._id}`}>Edit</Link>&nbsp;&nbsp;
                  <Link to={`/delete/${user._id}`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
