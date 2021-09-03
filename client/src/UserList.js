import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api"
export const UserList = () => {
  const [items, setItems] = useState([]);

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
        <h3>User List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((user) => (
              <tr key={user._id}>
                <td>{user.text}</td>
                <td>{user.description}</td>
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
