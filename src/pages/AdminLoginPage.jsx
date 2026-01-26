import React from "react";

import loginImg from "../../src/assets/login.jpg";
import { CustomInput } from "../components/layouts/CustomInput";
import { Button } from "react-bootstrap";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const AdminLoginPage = () => {
  const inputs = [
    {
      name: "email",
      label: "Email",
      Placeholder: "Boga@",
      type: "email",
      required: true,
    },

    {
      name: "password",
      label: "Password",
      Placeholder: "******",
      type: "password",
      required: true,
    },
  ];
  return (
    <div
      className="login flex"
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="logoLogin  border-box p-2">
        <div className="loginInner glass">Website logo</div>
      </div>
      <div className="loginForm glass">
        <form>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
         
          <div className="d-grid mt-4"><Button variant="primary" type="submit" >
            Login Now
          </Button>
          </div>
          <div className="forget-password mt-4 text-center">
            Forgot Password?
          </div>
          <div className="account mt-3 text-center">
            Don't you have an account? SignUp
          </div>
        </form>
         
      </div>
    </div>
  );
};

export default AdminLoginPage;
