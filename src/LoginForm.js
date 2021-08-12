import "./loginForm.css";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

function LoginForm() {
  //Static Variables
  const EMAIL_MATCH =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
  const PHONENUMBER_MATCH =
    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
  const MINIMUM_NAME_LENGTH = 2;
  const MINIMUM_PASSWORD_LENGTH = 8;

  const {
    handleSubmit,
    watch,
    control,
  } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    history.push("/success");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          //First Name
        }
        <Controller
          control={control}
          name="first-name"
          rules={{
            required: "First name required",
            minLength: {
              value: MINIMUM_NAME_LENGTH,
              message: "First name must be at least 2 characters",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              id="standard-basic"
              label="First Name"
              onChange={onChange}
              error={error}
              helperText={error?.message}
            />
          )}
        />

        {
          //Last Name
        }
        <Controller
          control={control}
          name="last-name"
          rules={{
            required: "Last name required",
            minLength: {
              value: MINIMUM_NAME_LENGTH,
              message: "Last name must be at least 2 characters",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              id="standard-basic"
              label="Last Name"
              onChange={onChange}
              error={error}
              helperText={error?.message}
            />
          )}
        />

        {
          //Email Address
        }
        <Controller
          control={control}
          name="email-address"
          rules={{
            required: "Email address required",
            pattern: {
              value: EMAIL_MATCH,
              message: "Must enter a valid email address",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              id="standard-basic"
              label="Email Address"
              onChange={onChange}
              error={error}
              helperText={error?.message}
            />
          )}
        />

        {
          //Password
        }
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password required",
            minLength: {
              value: MINIMUM_PASSWORD_LENGTH,
              message: "Password must be at least 8 characters",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              onChange={onChange}
              error={error}
              helperText={error?.message}
            />
          )}
        />

        {
          //Confirm Password
        }
        <Controller
          control={control}
          name="confirm-password"
          rules={{
            required: "Please enter a matching password",
            validate: (value) =>
              value === watch("password") || "Passwords must match",
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              id="standard-password-input"
              label="Confirm Password"
              type="password"
              onChange={onChange}
              error={error}
              helperText={error?.message}
            />
          )}
        />

        {
          //Phone Number
        }
        <Controller
          control={control}
          name="phone-number"
          rules={{
            pattern: {
              value: PHONENUMBER_MATCH,
              message: "Please enter a valid phone number",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              id="standard-basic"
              label="Phone Number"
              onChange={onChange}
              error={error}
              helperText={error?.message}
            />
          )}
        />

        {
          //Submit
        }
        <Button variant="contained" type="submit">
          Submit Form
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
