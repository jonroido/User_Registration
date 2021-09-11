import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers,deleteUser } from "./api"
export const UserList = () => {
  const [items, setItems] = useState([]);
  const removeUser = async (id) => {
    const newItems = items.filter(task => task._id !== id);
    await deleteUser(id);
    setItems(newItems);
  };
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
                <button ><Link to={`/edit/${user._id}`} style={{ textDecoration: 'none' ,color:'black'}}>Edit</Link></button>&nbsp;&nbsp;
                  <button onClick={() =>removeUser(user._id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
