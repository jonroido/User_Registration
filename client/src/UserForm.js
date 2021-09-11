import React from "react";
import { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { 
      firstName: user ? user.firstName : "" ,
      lastName: user ? user.lastName : "" ,
      email: user ? user.email : "" ,
      username: user ? user.username : "" ,
      password: user ? user.password : "" },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          className="form-control"
          {...register('firstName', { required: true })}
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          className="form-control"
          {...register('lastName', { required: true })}
          type="text"
          name="lastName"
          id="lastName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          {...register('email', { required: true })}
          type="text"
          name="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          className="form-control"
          {...register('username', { required: true })}
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          className="form-control"
          {...register('password', { required: true })}
          type="text"
          name="password"
          id="password"
        />
      </div>
      <br/>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save User
        </button>
      </div>
    </form>
  );
};
