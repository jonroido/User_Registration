import React from "react";
import { UserForm } from "./UserForm";
import { useHistory } from "react-router-dom";
import { createUser } from "./api";

export const CreateUser = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createUser(data)
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create User</h3>
        <UserForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
