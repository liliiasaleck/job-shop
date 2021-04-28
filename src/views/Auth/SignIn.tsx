import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography, TextField, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    marginTop: "20%",
  },
  form: {
    width: "100vw",
  },
  textfield: {
    width: "40%",
    display: "block",
  },
  btn: {
    width: "15%",
    borderRadius: "20px",
  },
});

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [name, setName] = useState("");
  const { register, handleSubmit } = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <Container className={classes.root}>
      <Typography variant="h3">Get started for free</Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          className={classes.textfield}
          label="Email"
          variant="outlined"
          {...register("email")}
          required
        />
        <TextField
          className={classes.textfield}
          label="Password"
          variant="outlined"
          {...register("password")}
          required
        />
        <Button variant="contained" color="secondary" className={classes.btn}>
          Sign in
        </Button>
        <Typography>
          New account? <NavLink to="/signup">Register</NavLink>
        </Typography>
      </form>
    </Container>
  );
};

export default SignIn;

//   return (
//     <div className="input-field">
//       <h1>Get started for free</h1>
//       <form action="#" onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="email" className="email">
//             Email
//           </label>
//           <input
//             {...register("email")}
//             type="text"
//             id="email"
//             name="email"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="password">
//             Password
//           </label>
//           <input
//             {...register("password")}
//             type="text"
//             id="password"
//             name="password"
//             required
//           />
//         </div>
//         <div>
//           <button
//             className="btn waves-effect waves-light"
//             type="submit"
//             name="action"
//           >
//             Submit
//             <i className="material-icons right">send</i>
//           </button>
//         </div>
//         <div>
//           New account? <NavLink to="/signup">Register</NavLink>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
