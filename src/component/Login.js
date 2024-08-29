import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { validateData } from "../uitls/validate";

export const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  const handleValidate = () => {
    if ((email.current && password.current) || (toggle && name.current)) {
      let message = "";
      if (email.current && password.current) {
        if (toggle && name.current) {
          // SignUp mode: validate email, password, and name
          message = validateData(
            email.current.value,
            password.current.value,
            name.current.value
          );
        } else {
          // SignIn mode: validate email and password only
          message = validateData(
            email.current.value,
            password.current.value,
            undefined
          );
        }
      }
      setError(message);
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 bg-black p-12 my-36 mx-auto left-0 right-0 opacity-90 text-white "
      >
        <h2 className="font-bold text-3xl py-2">
          {toggle ? "SignUp" : "SignIn"}
        </h2>
        {toggle && (
          <input
            ref={name}
            placeholder="Full name"
            type="text"
            className="p-1 my-2 bg-gray-700 w-full "
          />
        )}
        <input
          ref={email}
          placeholder="email"
          type="text"
          className="p-1 my-2 bg-gray-700 w-full "
        />
        <input
          ref={password}
          placeholder="password"
          type="password"
          className="p-1 my-2 bg-gray-700 w-full"
        />
        <p className="text-red-500 text-xs">{error}</p>
        <button
          className=" py-2 my-6 bg-red-500 rounded w-full"
          onClick={handleValidate}
        >
          {toggle ? "SignUp" : "SignIn"}
        </button>

        <div>
          <p className=" py-4 cursor-pointer text-sm" onClick={handleToggle}>
            {toggle
              ? "Already Registerd Sign In Now"
              : "New in Netflix Sign Up Now"}
          </p>
        </div>
      </form>
    </div>
  );
};
