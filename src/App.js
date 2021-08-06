import './App.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

function App() {
  //Static Variables
  const EMAIL_MATCH = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
  const PHONENUMBER_MATCH = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
  const MINIMUM_NAME_LENGTH = 2;
  const MINIMUM_PASSWORD_LENGTH = 8;


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first-name" className="first-name" >
            First Name
            <input 
                id="first-name"
                placeholder="First Name" 
                {...register("first-name", { required: "First name required", minLength: {value: MINIMUM_NAME_LENGTH, message: "First name must be at least 2 characters"}})}                      
            />
            {errors["first-name"] && <p>{errors["first-name"].message}</p>}
        </label>
        <label htmlFor="last-name" >  
            Last Name
            <input 
                id="last-name"
                placeholder="Last Name"
                {...register("last-name", { required: "Last name required", minLength: {value: MINIMUM_NAME_LENGTH, message: "Last name must be at least 2 characters"}})}
            />
            {errors["last-name"] && <p>{errors["last-name"].message}</p>}
        </label>
        <label htmlFor="email-address" >
            Email Address
            <input 
                id="email-address"
                placeholder="Email Address"
                {...register("email-address", { required: "Email address required", pattern: {value: EMAIL_MATCH, message: "Must enter a valid email address"}})}
            />
            {errors["email-address"] && <p>{errors["email-address"].message}</p>}
        </label>
        <label htmlFor="password" >
            Password
            <input 
                id="password"
                placeholder="Password"
                {...register("password", { required: "Password required", minLength: {value: MINIMUM_PASSWORD_LENGTH, message: "Password must be at least 8 characters"}})}
            />
            {errors["password"] && <p>{errors["password"].message}</p>}
        </label>
        <label htmlFor="confirm-password" >  
            Confirm Password
            <input 
                id="confirm-password"
                placeholder="Confirm Password"
                {...register("confirm-password", { required: "Passwords must match", validate: {}})}
            />
            {errors["confirm-password"] && <p>{errors["confirm-password"].message}</p>}
        </label>
        <label htmlFor="phone-number" >
            Phone Number (Optional)
            <input 
                id="phone-number"
                placeholder="Phone Number"
                {...register("phone-number", { required: true })}
            />
            {errors["phone-numberemail-address"] && <p>{errors["phone-number"].message}</p>}
        </label>
        <div>
            <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
