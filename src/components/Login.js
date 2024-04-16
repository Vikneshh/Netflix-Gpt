import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);

  const handleClick= ()=>{
        setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <div>
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix Background "
          className="absolute"
        />
      </div>
      <form className="bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white p-11 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ml-3">{isSignInForm?"Sign in":"Sign up"}</h1>

        {!isSignInForm?<input
          type="text"
          placeholder="Enter your Name"
          className="p-4 my-4 w-full rounded-sm bg-gray-800 bg-opacity-70"
        />:""}
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full rounded-sm bg-gray-800 bg-opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-4 my-4 w-full rounded-sm bg-gray-800 bg-opacity-70"
        />
        <button type="submit" className="bg-red-700 rounded-lg p-3 my-5 w-full font-semibold">
        {isSignInForm?"Sign in":"Sign up"}
        </button>
        <p className="text-gray-500 m-2 text-center">OR</p>
        <button className=" bg-slate-200 rounded-lg p-3 my-3 w-full bg-opacity-40 font-semibold">Use a sign-in code</button>
        {/* <a href="">Forgot password ?</a>
        <input type="checkbox" name="" id="check" checked/>
        Remember me */}
        <p className="font-light">
        {isSignInForm?"New to Netflix ?":"Already a user ?"} {" "}
          <span>
            <a  className="font-semibold cursor-pointer" onClick={handleClick}>{isSignInForm?"Sign up now":"Sign in"}</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
