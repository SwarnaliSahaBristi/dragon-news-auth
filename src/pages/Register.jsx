import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-bold">Your Name</label>
            <input type="text" className="input" placeholder="Enter your name" />
            {/* photo */}
            <label className="label font-bold">Photo URL</label>
            <input type="text" className="input" placeholder="Enter your url" />
            {/* email */}
            <label className="label font-bold">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label font-bold">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
