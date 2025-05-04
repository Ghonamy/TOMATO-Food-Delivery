import { useState } from "react";
import Cross_Icon from "../Assets/cross_icon.png";
import { IoClose } from "react-icons/io5";
function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="absolute bg-[#00000089] top-0 left-0 w-full h-full z-100 flex justify-center items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white w-[370px] max-h-[430px] rounded-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-[25px] font-medium">{currentState}</h2>

          <IoClose
            onClick={() => setShowLogin(false)}
            className="cursor-pointer bg-[#ff6345] text-[#FFF] text-[23px] rounded"
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <input
            className="outline-0 border border-[#C9C9C9] p-2 rounded text-[15px] pl-4"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="outline-0 border border-[#C9C9C9] p-2 rounded text-[15px] pl-4"
            type="email"
            placeholder="Your Email"
          />
          {currentState === "Sign Up" ? (
            <input
              className="outline-0 border border-[#C9C9C9] p-2 rounded text-[15px] pl-4"
              type="password"
              placeholder="Password"
            />
          ) : (
            <></>
          )}
          <button className="text-[#FFF] bg-[#ff6345] rounded w-full h-[40px] cursor-pointer">
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="flex items-center gap-3">
            <input className="accent-[#ff6345]" type="checkbox" required />
            <p className="text-[15px] text-[#808080]">
              By continuing, i agree to the terms of use & privacy policy.
            </p>
          </div>
          {currentState === "Sign Up" ? (
            <p className="text-[#808080] text-center">
              Already Have an Account?{" "}
              <span
                className="text-[#ff6345] font-semibold cursor-pointer"
                onClick={() => setCurrentState("Login")}
              >
                Click Here
              </span>
            </p>
          ) : (
            <p className="text-[#808080] text-center">
              Create a New Account?{" "}
              <span
                className="text-[#ff6345] font-semibold cursor-pointer"
                onClick={() => setCurrentState("Sign Up")}
              >
                Login Here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
