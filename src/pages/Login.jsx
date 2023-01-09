import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

import eyes_open from "../assets/img/login/eyes_open.svg";
import eyes_closed from "../assets/img/login/eyes_closed.svg";

const Login = () => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  return (
    <div className="bg-[#FC8D0B] bg-opacity-20 h-screen font-inter">
      <Admin_header />
      <div className="flex justify-center pt-10 ">
        <div className="p-10 bg-white rounded-md w-full max-w-[400px] ">
          <h1 className="text-center font-semibold text-xl">Log in</h1>

          {/* login form */}
          <form
            onSubmit={(e) => {
              // Preventing default refresh
              e.preventDefault();

              setError(null);
              // Storing user credentials
              const userCredentials = {
                username: emailRef.current.value,
                password: passwordRef.current.value,
              };

              if (
                emailRef?.current?.value?.length > 0 &&
                passwordRef?.current?.value?.length > 0
              ) {
                axios({
                  method: "post",
                  url: VITE_BASE_LINK + "login",
                  data: userCredentials,
                })
                  .then(function (response) {
                    if (response?.data?.token) {
                      localStorage.setItem(
                        "username",
                        response?.data?.username
                      );
                      localStorage.setItem("token", response?.data?.token);
                      localStorage.setItem("user_id", response?.data?.id);
                      navigate("/admin");
                    } else {
                      setError(response?.data?.message);
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            }}
            className="pt-10"
          >
            <label htmlFor="email">Email address</label>
            <input
              ref={emailRef}
              name="email"
              type="text"
              className="border rounded-md p-2 w-full my-2 outline-[#FC8D0B]"
            />
            <label htmlFor="password">Password </label>

            <div className="flex border rounded-md ">
              <input
                ref={passwordRef}
                name="password"
                type={showPassword ? "text" : "password"}
                className=" p-2 w-full rounded-md focus:outline-[#FC8D0B] flex-1"
              />

              <div
                className="flex justify-center items-center p-2 focus:outline-[#FC8D0B] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={eyes_open} alt="show password" />
              </div>
            </div>
            {/* error */}
            <p
              className={` ${
                error ? "flex" : "hidden"
              } text-[#FF440D] text-sm  items-center gap-2 mt-3`}
            >
              {" "}
              <span className="bg-[#FF440D] text-white aspect-square rounded-full w-[20px] flex justify-center items-center">
                !
              </span>{" "}
              {error}
            </p>
            <button
              type="submit"
              className="rounded-md bg-[#FF440D] text-white w-full mt-3 p-2 transition-all active:scale-95"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
