import React from "react";
import { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: user ? user.text : "" },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">First Name:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Last Name:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Email:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Username:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Password:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <br/>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Register User
        </button>
      </div>
    </form>
  );
};
