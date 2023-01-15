import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    // TODO
    // make a post request to check username and password
    fetch("https::/localhost:5000/users", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
      body: {
        username: formData.username,
        password: formData.password,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.status === "Login Successfull"
          ? setLoginSuccess(true)
          : setLoginSuccess(false)
      );
  };

  const handleSignup = async () => {
    // TODO
    // navigate to Sign-up page
    navigate("/sign-up"); // uncomment this when
  };

  return (
    <div id="login-card">
      <Form className="LoginForm">
        <Typography.Title className="Typo" color="primary">
          Welcome
        </Typography.Title>
        <Form.Item label="Email" name={"myEmail"}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item label="Password" name={"myPassword"}>
          <Input placeholder="Password" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          id="login-button"
          onClick={handleLogin}
        >
          Login
        </Button>

        <div className="socialLogin">
          <Button type="primary" htmlType="submit" block onClick={handleSignup}>
            {" "}
            Sign-up{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
