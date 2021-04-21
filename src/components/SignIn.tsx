import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [name, setName] = useState("");
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <div className="input-field">
      <h1>Get started for free</h1>
      <form action="#" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className="email">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            {...register("password")}
            type="text"
            id="password"
            name="password"
            required
          />
        </div>
        <div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
        <div>
          New account? <NavLink to="/signup">Register</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
