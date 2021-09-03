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
        <label htmlFor="text">Text:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Description:</label>
        <input
          className="form-control"
          {...register('test', { required: true })}
          type="text"
          name="description"
          id="description"
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
