import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: boolean;
};

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const { register, handleSubmit } = useForm<FormData>();

  //   const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(
    ({ firstName, lastName, email, password, acceptTerms }) => {
      console.log(firstName, lastName, email, password, acceptTerms);
    }
  );

  return (
    <div className="input-field">
      <h1>Get started for free</h1>
      <form action="#" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="name">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            id="name"
            name="firstname"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname" className="lastname">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            id="lastname"
            name="lastname"
            required
          />
        </div>
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
          <label>
            <input
              type="checkbox"
              {...register("acceptTerms")}
              name="acceptterms"
              required
            />
            <span>I accept terms of service</span>
          </label>
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
          Already have an account? <NavLink to="/signin">Sign in</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
