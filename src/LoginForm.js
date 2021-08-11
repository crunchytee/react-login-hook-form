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
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
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
            //test Controller
        }
        <Controller
          control={control}
          name="test"
          render={({
              field: { onChange, value },
              fieldState: {},
              formState: {},
            }) => (
                <TextField
                id="standard-basic"
                label="test input"
                helperText={
                    errors["test-input"] && <>{errors["test-input"].message}</>
                }
                {...register("test-input", {
                    required: "First name required",
                    minLength: {
                        value: MINIMUM_NAME_LENGTH,
                        message: "First name must be at least 2 characters",
                    },
                })}
                />
                )}
                />

        {
            //First Name
        }
        <TextField
          id="standard-basic"
          label="First Name"
          helperText={
            errors["first-name"] && <>{errors["first-name"].message}</>
          }
          {...register("first-name", {
            required: "First name required",
            minLength: {
              value: MINIMUM_NAME_LENGTH,
              message: "First name must be at least 2 characters",
            },
          })}
        />

        {
          //Last Name
        }
        <TextField
          id="standard-basic"
          label="Last Name"
          helperText={errors["last-name"] && <>{errors["last-name"].message}</>}
          {...register("last-name", {
            required: "Last name required",
            minLength: {
              value: MINIMUM_NAME_LENGTH,
              message: "Last name must be at least 2 characters",
            },
          })}
        />

        {
          //Email Address
        }
        <TextField
          id="standard-basic"
          label="Email Address"
          helperText={
            errors["email-address"] && <>{errors["email-address"].message}</>
          }
          {...register("email-address", {
            required: "Email address required",
            pattern: {
              value: EMAIL_MATCH,
              message: "Must enter a valid email address",
            },
          })}
        />

        {
          //Password
        }
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          helperText={errors["password"] && <>{errors["password"].message}</>}
          {...register("password", {
            required: "Password required",
            minLength: {
              value: MINIMUM_PASSWORD_LENGTH,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        {
          //Confirm Password
        }
        <TextField
          id="standard-password-input"
          label="Confirm Password"
          type="password"
          helperText={errors["confirm-password"] && <>Passwords must match</>}
          {...register("confirm-password", {
            required: "Passwords must match",
            validate: (value) => value === watch("password"),
          })}
        />

        {
          //Phone Number
        }
        <TextField
          id="standard-basic"
          label="Phone Number"
          helperText={
            errors["phone-numberemail-address"] && (
              <>{errors["phone-number"].message}</>
            )
          }
          {...register("phone-number", {
            pattern: {
              value: PHONENUMBER_MATCH,
              message: "Please enter a valid phone number",
            },
          })}
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
