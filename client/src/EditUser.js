import React, { useState, useEffect } from "react";
import { UserForm } from "./UserForm";
import { useRouteMatch, useHistory } from "react-router-dom";

export const EditUser = () => {
  const match = useRouteMatch()
  const [user, setUser] = useState();
  const history = useHistory()

  useEffect(() => {
   // get
  }, []);

  const onSubmit = async (data) => {
  //update
    history.push("/")
  }

  return user ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit User</h3>
        <UserForm user={user} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
